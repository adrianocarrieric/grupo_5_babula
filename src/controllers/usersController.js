const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const User = db.User;
const usersImagesRoute = path.join(__dirname, "..", "..", "public", "images", "users");

const controller = {
  register: (req, res) => {
    return res.render("./users/userRegisterForm");
  },
  processRegister: async (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("./users/userRegisterForm", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    //console.log(req.body)
    const { firstName, lastName, email, password, roleId } = req.body;
    let checkRoleId;
    if (Number(roleId) === 1) {
      checkRoleId = 1;
    } else {
      checkRoleId = 2;
    }

    const avatar = req.file.filename;
    await User.create({
      firstName,
      lastName,
      email,
      password: bcryptjs.hashSync(password, 10),
      roleId: checkRoleId,
      avatar,
    })
      .then(() => {
        res.redirect("/user/login");
      })
      .catch((error) => res.send(error));
  },

  login: (req, res) => {
    return res.render("./users/userLoginForm");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    let oldData = req.body;
    if (!errors.isEmpty()) {
      return res.render("./users/userLoginForm.ejs", { errorMessages: errors.mapped(), oldData });
    } else {
      User.findAll()
        .then(allUsers => {
          let userToLogin;
          for (let i = 0; i < allUsers.length; i++) {
            if (req.body.email == allUsers[i].email && bcryptjs.compareSync(req.body.password, allUsers[i].password)) {
              userToLogin = allUsers[i];
              break;
            }
          }
          if (userToLogin == undefined) {
            let customError = {
              "password": {
                "msg": "Las credenciales no son válidas",
              }
            }
            return res.render("./users/userLoginForm.ejs", { errorMessages: customError, oldData });

          }
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.rememberUser) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          res.redirect("/");
        });
    }
  },

  profile: (req, res) => {
    return res.render("./users/userProfile", {
      user: req.session.userLogged,
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  }
};

module.exports = controller;

const path = require("path");
const { body } = require("express-validator");
const db = require("../database/models");

const User = db.User;

const validateRegister = [
  body("firstName")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Ingrese un nombre con mas de 2 carateres"),
  body("lastName")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Ingrese un nombre con mas de 2 carateres"),
  body("email", "Email Invalido")
    .exists()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido")
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        User.findOne({ where: { email: userEmail } }).then((emailExist) => {
          if (emailExist !== null) {
            reject(new Error("El email ya se encuentra registrado"));
          } else {
            resolve(true);
          }
        });
      });
    }),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .escape()
    .isLength({ min: 8 })
    .withMessage("La contrasenia debe tener un minimo de 8 caracteres")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .withMessage(
      "El password debe contener 1 Mayuscula, minuscula,un numero y un caracter especial"
    ),
  body("roleId").notEmpty().withMessage("Tienes que elegir un categoría"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", "jpeg", ".png", "gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validateRegister;

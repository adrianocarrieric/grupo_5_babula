const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");


const userInDb = db.User;

const userController = {
  list: (req, res) => {
    userInDb.findAll()
      .then(users => {
        if (users.length) {
          let response = {
            count: {
              status: 200,
              count: users.length
            },
            users: []
          }
          users.forEach(user => {
            response.users.push({
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              detail: "http://localhost:4000/api/users/" + user.id
            })
          });

          return res.json(response);
        }
        else {
          return res.status(404).json({ error: 'No se encontraron resultados' });
        }
      })
      .catch(error => {
        return res.status(500).json({ error: 'No se puede conectar a la base de datos' });;
      })
  },

  detail: (req, res) => {
    userInDb.findByPk(req.params.id)
      .then(user => {
        let response = {
          data: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            imgURL: "http://localhost:4000/images/users/" + user.avatar,
            dbRelations: ["roles"],
          }
        }
        res.json(response);
      }).catch(error => res.send(error))

  }
}
module.exports = userController;

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { application } = require("express");
const { body } = require("express-validator");

const db = require("../database/models");

const User = db.User;

const validateProducts = [
  body("title")
    .exists()
    .withMessage("Inserte un nombre")
    .isLength({ min: 5 })
    .withMessage("Inserte un nombre de al menos 5 caracteres"),
  body("description")
    .exists()
    .withMessage("Inserte una descripcion")
    .isLength({ min: 20 })
    .withMessage("Inserte una descripcion de al menos 20 caracteres"),
  body("img").custom((value, { req }) => {
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

module.exports = validateProducts;

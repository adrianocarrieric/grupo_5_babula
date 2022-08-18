const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const productInDb = db.Product;

const productsController = {
  list: async (req, res) => {
    const groupCategory = await db.Product.findAll({
      attributes: [
        "categoryId",
        [sequelize.fn("count", sequelize.col("id")), "count"],
      ],
      group: ["categoryId"],
    });
    productInDb
      .findAll()
      .then((products) => {
        if (products.length) {
          let response = {
            counts: {
              status: 200,
              counts: products.length,
            },
            products: [],
            countByCategory: groupCategory,
          };
          products.forEach((product) => {
            response.products.push({
              id: product.id,
              name: product.title,
              description: product.description,
              dbRelations: ["categories"],
              detail: "http://localhost:4000/api/products/" + product.id,
            });
          });
          return res.json(response);
        } else {
          return res
            .status(404)
            .json({ error: "No se encontraron resultados" });
        }
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "No se puede conectar a la base de datos" });
      });
  },

  detail: (req, res) => {
    let productId = req.params.id;
    productInDb
      .findByPk(productId)
      .then((plato) => {
        let respuesta = {
          data: {
            product: plato,
            imgURL: "http://localhost:4000/images/products/" + plato.img,
            dbRelations: ["categories"],
          },
        };
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
};
module.exports = productsController;

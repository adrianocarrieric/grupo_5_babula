//const { create } = require('domain'); //

const db = require("../database/models")
const sequelize = db.sequelize;

const Products = db.Product

const controller = {
    index: (req, res) => {
        Products.findAll({where: { todaysDay: 1 }
        })
            .then(todaysDay => {
                res.render('./index', { todaysDay })
            })
    }
}

module.exports = controller;
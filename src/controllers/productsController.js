const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const sequelize = db.sequelize;

const Products = db.Product
const productImageRoute = path.join(__dirname, '..', '..', 'public', 'images', 'products')

const controller = {
    index: (req, res) => {
        Products.findAll()
            .then(products => {
                res.render('./products/products', { products })
            })
    },

    detail: (req, res) => {
        let productId = req.params.id
        Products.findByPk(productId)
            .then(plato => {
                res.render('./products/detail', { plato });
            });
    },

    productCreate: (req, res) => {
        res.render('./products/productCreateForm');
    },

    store: function (req, res) {
        Products.create({
            title: req.body.title,
            price: parseInt(req.body.price),
            ingredients: req.body.ingredients,
            img: req.file ? req.file.filename : "default-image.jpg",
            description: req.body.description,
            categoryId: req.body.category,
            todaysDay: req.body.todaysDay
        })

            .then(() => {
                return res.redirect('/products')
            })
            .catch(error => res.send(error))
    },

    productEdit: (req, res) => {
        let productId = req.params.id
        Products.findByPk(productId)
            .then(Plato => {
                res.render('./products/productEditForm', { Plato })
            })
    },

    update: (req, res) => {
        const id = req.params.id;
        let productToEdit = db.Products.findAll(product => product.id == id);
        let productToSave = {
            id: productToEdit.id,
            title: req.body.title,
            price: parseInt(req.body.price),
            ingredients: req.body.ingredients,
            category: req.body.category,
            description: req.body.description,
            img: req.file ? req.file.filename : Products.img,
            todaysDay: req.body.todaysDay
        }, {
            where: { id: productId }
        })
            .then(() => {
                res.redirect('/products/detail/' + productId)
            })
    },

    destroy: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
            .then(productToDestroy => {
                let productImageDirectory = path.join(productImageRoute, productToDestroy.img)
                fs.unlinkSync(productImageDirectory)
                Products.destroy({ where: { id: productId }, force: true })
                    .then(() => {
                        res.redirect('/products')
                    })
            })
    },

    shop: (req, res) => {
        res.render('./products/shop');
    }
};


module.exports = controller;
const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const sequelize = db.sequelize;

const Products = db.Product
const productsImagesRoute = path.join(__dirname, '..', '..', 'public', 'images', 'products')

const controller = {
    index: (req, res) => {
        Products.findAll()
            .then(plato => {
                res.render('./products/products', { plato })
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
                res.redirect('/products')
            })
            .catch(error => res.send(error))
    },

    productEdit: (req, res) => {
        let productId = req.params.id
        Products.findByPk(productId)
            .then(Plato => {
                res.render('./products/productEditForm', { Plato })
            })
            .catch(error => res.send(error))
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
        };
        Products.update(productToSave, {
            where: { id: productId }
        })
        .then(() => {
            res.redirect('/products/detail/' + productId)
        })
        .catch(error => res.send(error))
    },

    destroy: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
            .then(productToDestroy => {
                let productImageDirectory = path.join(productsImagesRoute, productToDestroy.img)
                fs.unlinkSync(productImageDirectory)
                Products.destroy({ where: { id: productId }, force: true })
                    .then(() => {
                        res.redirect('/products')
                    })
            })
            .catch(error => res.send(error))
    },

    shop: (req, res) => {
        let plato = req.session.productAdded;
        res.render('./products/shop', { plato });
    },

    add: (req, res) => {
        let productToAddId = req.body.productToAdd;
        Products.findByPk(productToAddId)
            .then(plato => {
                req.session.productAdded = plato;
                res.render('./products/shop', { plato });
            });
    },

    clear: (req, res) => {
        req.session.productAdded = null;
        res.redirect('/products/shop');
    }
}

module.exports = controller;
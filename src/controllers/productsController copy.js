const fs = require('fs');
const path = require('path');
const db = require("../database/models")
const sequelize = db.sequelize;

const controller = {
    index: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render("./products/products", { products })
            })
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(plato => {
                res.render('./products/detail', { plato });
            });
    },

    productCreate: (req, res) => {
        res.render('./products/productCreateForm');

    },

    store: function (req, res) {
        db.Product.create({
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

    /*
store: (req, res) => {
    let nuevoProducto = {
        id: products[products.length - 1].id + 1,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients ,
        price: parseInt(req.body.price),
        category: req.body.category,
        img: req.file ? req.file.filename: "default-image.jpg" ,
        todaysDay: Boolean(req.body.todaysDay)
    }
    products.push(nuevoProducto);
    fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));

    res.redirect("/products");
}*/

    productEdit: (req, res) => {
        let productId = req.params.id
        db.Product.findAll({
            where: { id: productId }
        })
            .then(plato => {
                res.render('./products/productEditForm', { plato })
            })
        

        /* let plato = products.find(plato => plato.id == id);
        let productToEdit = products.find(product => product.id == id);
        res.render('./products/productEditForm', { plato, productToEdit }); */
    },

    // Update - Method to update

    /* update: function (req,res) {
    const id = req.params.id;
    Product
    .update(
        {
            id: productToEdit.id,
            title: req.body.title,
            price: parseInt(req.body.price),
            ingredients: req.body.ingredients,
            category: req.body.category,
            description: req.body.description,
            img: req.file ? req.file.filename : productToEdit.img,
            todaysDay: Boolean(req.body.todaysDay)
        },
        {
            where: {id:id}
        })
    .then(()=> {
        return res.redirect('/products')})            
    .catch(error => res.send(error)) */

    update: (req, res) => {
        const id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        let productToSave = {
            id: productToEdit.id,
            title: req.body.title,
            price: parseInt(req.body.price),
            ingredients: req.body.ingredients,
            category: req.body.category,
            description: req.body.description,
            img: req.file ? req.file.filename : productToEdit.img,
            todaysDay: Boolean(req.body.todaysDay)
        }

        let indice = products.findIndex(product => {
            return product.id == id
        })
        products[indice] = productToSave;

        fs.writeFileSync(productsFile, JSON.stringify(products, null, " "));
        res.redirect("/products")
    },

    /*delete: function (req,res) {
    let movieId = req.params.id;
    Movies
    .findByPk(movieId)
    .then(Movie => {
        return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
    .catch(error => res.send(error)) */

    destroy: (req, res) => {
        const id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);

        fs.writeFileSync(productsFile, JSON.stringify(finalProducts, null, ' '));
        res.redirect("/products")
    },

    /* buscar:(req, res) => {
    fetch('http://www.omdbapi.com/?apikey=d4e35e92&t'+ req.body.titulo)
    .then(response=>response.json())
    .then (movie => {
        res.render('moviesDetailOmdb', {movie})
    })
    .catch(error => res.send(error)) 
}  */

    shop: (req, res) => {
        res.render('./products/shop');
    }

};


module.exports = controller;
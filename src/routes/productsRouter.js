// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const uploadFile = require('../middlewares/multerProductMiddleware');


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** Create and edit products ***/ 
router.get('/create', authMiddleware, productsController.productCreate); 
router.post('/', uploadFile.single("product_image") , productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', authMiddleware, productsController.productEdit); 
router.patch('/edit/:id', uploadFile.single("img"), productsController.update); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

/*** GET ONE PRODUCT ***/ 
router.get('/shop', productsController.shop);

module.exports = router;
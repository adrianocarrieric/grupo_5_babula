// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Api Controller Require ************
const apiProductsController = require("../../controllers/api/apiProductsController");



/*** GET ALL PRODUCTS ***/
router.get("/", apiProductsController.list);
router.get("/:id", apiProductsController.detail);


module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");

// ************ Api Controller Require ************
const apiUsersController = require("../../controllers/api/apiUsersController");

// Total Users
router.get("/" , apiUsersController.list);

// Detail User
router.get("/:id", apiUsersController.detail)

module.exports = router;

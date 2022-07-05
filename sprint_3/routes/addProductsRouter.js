const express = require('express');
const addProductsController = require("../controllers/addProductsController");
const router = express.Router();


router.get('/', addProductsController.addProducts);



module.exports = router;
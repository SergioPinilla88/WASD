const express = require('express');
let productController = require("../controllers/productController");
const router = express.Router();


router.get('/', productController.producto);



module.exports = router;
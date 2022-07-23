const express = require('express');
let principalController = require("../controllers/mainController");
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/', principalController.home);
router.get('/listadoProductos', productController.listaProductosUser);


module.exports = router;
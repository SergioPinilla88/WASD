const express = require('express');
let principalController = require("../controllers/mainController");
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/', principalController.home);
router.get('/listadoProductos', productController.listaProductosUser);
router.get('/buscarProductos/:busqueda', productController.buscarProductos);


module.exports = router;
const express = require('express');
let productController = require("../../controllers/API/productController");
const router = express.Router();


router.get('/:id', productController.producto);
router.get('/detalleProductos/total', productController.resumenProductos);
router.get('/buscarProducto/:busqueda', productController.buscarProducto);
router.get('/ventas/total', productController.ventas);
router.get('/', productController.productos);
router.post('/', productController.adicionarProducto);
router.delete('/:id', productController.eliminarProducto);




module.exports = router;
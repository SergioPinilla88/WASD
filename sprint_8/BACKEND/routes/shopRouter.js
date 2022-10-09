const express = require('express');
const shopController = require('../controllers/shopController');
const router = express.Router();
const toLoginMiddleware = require('../middlewares/toLoginMiddleware');


router.get('/carrito_de_compras', toLoginMiddleware, shopController.carrito);
router.post('/adicionarProducto/:id', toLoginMiddleware, shopController.adicionarProducto);
router.delete('/deleteProductoCarrito/:id', toLoginMiddleware, shopController.eliminarProducto);
router.put('/verificaCompra/:id', toLoginMiddleware, shopController.verificaCompra);
router.get('/getDetalleCompra/:id', toLoginMiddleware, shopController.detalleCompra);
router.get('/carritoVacio', toLoginMiddleware, shopController.carritoVacio);



module.exports = router;
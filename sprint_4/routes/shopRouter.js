const express = require('express');
const shopController = require('../controllers/shopController');
const router = express.Router();


router.get('/carrito_de_compras', shopController.carrito);



module.exports = router;
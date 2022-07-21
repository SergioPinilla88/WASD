const express = require('express');
const productController = require("../controllers/productController");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const pathULImages = path.resolve(__dirname , "../public/images");

const storage = multer.diskStorage({

        destination: function(req, file, cb){

                cb(null, pathULImages);               

        },

        filename: function( req, file, cb){

                cb(null, Date.now() + '-' + file.originalname);

        }

});

const uploadFile = multer({storage: storage});

router.get('/addProduct', productController.addProductView);
router.post('/addProduct', uploadFile.single('image'), productController.addProduct);
router.get('/products', productController.listaProductos);
router.get('/editProduct/:id', productController.editaProductoView);
router.put('/editProduct/:id', uploadFile.single('image'), productController.editaProducto);
router.delete('/deleteProduct/:id', productController.deleteProduct);





module.exports = router;
const fs = require('fs');
const path = require("path");


const pathData = path.resolve(__dirname, "../data/productos.json");


let productController = {

        producto: (request, response) => { 
    
            response.render('productDetail');
            
        },

        addProductView: (request, response) => { 
    
            response.render('addProducts');
            
        },

        addProduct: (request, response) => {

            let leeArchivo = fs.readFileSync(pathData, 'utf-8');
            let productosArch = JSON.parse(leeArchivo);

            let producto = {

                id: 0,
                nombreProducto: '',
                unidadesDisp: 0,
                fabricante: '',
                paisOrigen: '',
                modelo: 0,
                funcionalidades: '',
                imagen: '',
                precio: 0,
                peso: 0,
                calificacion: 0

            } ;             


            
            producto.id = productosArch[productosArch.length - 1].id + 1;
            producto.nombreProducto = request.body.nombre;
            producto.funcionalidades = request.body.descripcion;
            producto.imagen = request.file.filename;
            producto.precio = request.body.precio;
            producto.unidadesDisp = request.body.cantidad;

            productosArch.push(producto);

            let productoString = JSON.stringify(productosArch);

           fs.writeFileSync(pathData, productoString);

           //response.send(request.body.image);
           response.send(producto);

        }

};

module.exports = productController;
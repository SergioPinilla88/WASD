const { privateDecrypt } = require('crypto');
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
                descripcion: '',
                unidadesDisp: 0,
                fabricante: '',
                paisOrigen: '',
                modelo: 0,
                funcionalidades: '',
                imagen: '',
                precio: 0,
                peso: 0,
                categoria: '',
                calificacion: 0

            } ;             


            
            producto.id = productosArch[productosArch.length - 1].id + 1;
            producto.nombreProducto = request.body.nombre;
            producto.descripcion = request.body.descripcion;
            producto.funcionalidades = request.body.funcionalidad;
            producto.imagen = request.file.filename;
            producto.precio = request.body.precio;
            producto.unidadesDisp = request.body.cantidad;
            producto.calificacion = request.body.calificacion;
            producto.fabricante = request.body.fabricante;
            producto.paisOrigen = request.body.paisOrigen;
            producto.modelo = request.body.modelo;
            producto.peso = request.body.peso;
            producto.categoria = request.body.categoria;

            productosArch.push(producto);

            let productoString = JSON.stringify(productosArch);

           fs.writeFileSync(pathData, productoString);

           //response.send(request.body.image);
           response.redirect('/admin/products');

        },

        listaProductos: (request, response) => {

            let leeArchivo = fs.readFileSync(pathData, 'utf-8');
            let productosArch = JSON.parse(leeArchivo);



            response.render("productList", {productos: productosArch});


        },

        editaProductoView: (request, response) => {

            let leeArchivo = fs.readFileSync(pathData, 'utf-8');
            let productosArch = JSON.parse(leeArchivo);
            
            let productosFilter = productosArch.filter(producto => producto.id == request.params.id);
            
           if(!productosFilter){

                response.send("No existe el prod");

            }else{

                response.render("editProduct",{productos: productosFilter});

            }
            console.log(productosFilter);
            

            

        },

        editaProducto: (request, response) => {

            let leeArchivo = fs.readFileSync(pathData, 'utf-8');
            let productosArch = JSON.parse(leeArchivo);
            request.params.id
            let productoFind = productosArch.find(producto => producto.id == request.body.id);
            let indice = productosArch.findIndex(producto => producto.id == request.body.id);
            console.log(request.body.id);
            console.log(indice);
            console.log(productoFind);
            
            productoFind.id = request.body.id; 
            productoFind.nombreProducto = request.body.nombre;
            productoFind.descripcion = request.body.descripcion;
            productoFind.funcionalidades = request.body.funcionalidad;
            
            if(request.file){
                productoFind.imagen = request.file.filename;
            }
            
            productoFind.precio = request.body.precio;
            productoFind.unidadesDisp = request.body.cantidad;
            productoFind.calificacion = request.body.calificacion;
            productoFind.fabricante = request.body.fabricante;
            productoFind.paisOrigen = request.body.paisOrigen;
            productoFind.modelo = request.body.modelo;
            productoFind.peso = request.body.peso;
            productoFind.categoria = request.body.categoria;

           

            productosArch[indice] = productoFind;

            let productoString = JSON.stringify(productosArch);

            fs.writeFileSync(pathData, productoString);

          
           response.redirect('/admin/products');




            

        }

};

module.exports = productController;
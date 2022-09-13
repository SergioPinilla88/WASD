const { privateDecrypt } = require('crypto');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require("path");
const db = require('../database/models');
const { Op } = require("sequelize");
const Usuario = require('../database/models/Usuario');


const pathData = path.resolve(__dirname, "../data/productos.json");


let productController = {
        producto: (request, response) => {   
            
            let relacionado = {

                id: 0,
                nombreProducto: "",
                precio: 0,
                imagen: ""                
            
            };

            let relacionados = [];

            db.Producto.findByPk(request.params.id, {
                include: [

                    {association: "fabricantes"},
                    {association: "paises"},
                    {association: "categorias"},
                    {association:"productosRelacionados"},
                    {association:"productoResenas", include: "resenasUsuario"}

               
                ]}).then(function(producto){


                    //console.log(producto.dataValues.productoResenas[0].dataValues);
                    codigosRelacionados = [];
                
                    if(producto){

                        codigosRelacionados = [];

                        for(i = 0; i < producto.productosRelacionados.length; i++){
                    
                            codigosRelacionados.push(producto.productosRelacionados[i].codigoRelacionado);
                
                        };

                        db.Producto.findAll({

                            where:{id: codigosRelacionados}
                    
                        }).then(function(relacionados){        
                            
                                                       
                                
                                response.render('productDetail', {product: producto, relacionado: relacionados, resena: producto.dataValues.productoResenas});

                           

                        });
                
                    } 
                    
                });
            
      
    },

     addProductView: (request, response) => { 


        
        db.Categoria.findAll().then(categorias => {
            
                db.Fabricante.findAll().then(fabricantes => {

                    db.Pais.findAll().then(paises => {

                        response.render('addProducts', {categoria: categorias, fabricante: fabricantes, pais: paises});

                    });

                });
            
        });
           
        
    },
        
    addProduct: (request, response) => {

        let resultValidation = validationResult(request);   
        if(resultValidation.errors.length > 0){
            console.log("errores en entradas");
            console.log(resultValidation.errors);
            db.Categoria.findAll().then(categorias => {
                console.log("Categorias luego error");
                console.log(categorias);
            db.Fabricante.findAll().then(fabricantes => {
                console.log("fabricantes luego error");
                console.log(fabricantes);
                db.Pais.findAll().then(paises => {
                    
                    return response.render('addProducts', {errors:resultValidation.mapped(), old: request.body, categoria: categorias, fabricante: fabricantes, pais: paises});

                });

            });
        
     });

        }else{

            db.Producto.create({

                nombre: request.body.nombre,
                unidadesDisponibles: request.body.cantidad,
                modelo: request.body.modelo,
                funcionalidades: request.body.funcionalidad,
                imagen: request.file.filename,
                precio: request.body.precio,
                peso: request.body.peso,
                descripcion:  request.body.descripcion,
                calificacion: request.body.calificacion,
                Categoria_id: request.body.categoria,
                Fabricante_id: request.body.fabricante,
                Pais_id: request.body.paisOrigen
    
    
            })
    
            response.redirect('/admin/products');
            

        }

       
        },

        listaProductos: (request, response) => {
            
            db.Producto.findAll({

                include: [
                    
                    {association: "fabricantes"},
                    {association: "paises"},
                    {association: "categorias"}
                ]
            
            }).then(function(productos){

                
                response.render("productList", {productos: productos});

            })
            
          
        },

        listaProductosUser: (request, response) => {

            db.Producto.findAll({

                include: [
                    
                    {association: "fabricantes"},
                    {association: "paises"},
                    {association: "categorias"}
                ]
               
            }).then(function(prod){

                console.log(prod.productosRelacionados);
                response.render("productListUser", {productos: prod});

            })

         
        },

        editaProductoView: (request, response) => {

            db.Categoria.findAll().then(categorias => {
           
                db.Fabricante.findAll().then(fabricantes => {

                    db.Pais.findAll().then(paises => {

                        db.Producto.findByPk(request.params.id).then(function(productos){    
                                
                                console.log(productos);
                       
                                response.render('editProduct', {categoria: categorias, fabricante: fabricantes, pais: paises, producto: productos});

                            });

                    });

                });
            
            });


                       
        },

        editaProducto: (request, response) => {

            let resultValidation = validationResult(request);
           
             
            if(resultValidation.errors.length > 0){

             db.Categoria.findAll().then(categorias => {
                
                db.Fabricante.findAll().then(fabricantes => {
                    
                    db.Pais.findAll().then(paises => {

                        db.Producto.findByPk(request.body.id).then(function(productos){    
                                
                               
                            
                            if(!productos){
                                return response.send("No existe el producto");
                            }else{
                                                                
                                return response.render("editProduct",{producto: productos, errors: resultValidation.mapped(), old: request.body, categoria: categorias, fabricante: fabricantes, pais: paises});
            
                             }                                
                            
                                

                            });

                    });

                });
            
            });

            }else{

            db.Producto.update(

                {

                    nombre: request.body.nombre,
                    unidadesDisponibles: request.body.cantidad,
                    modelo: request.body.modelo,
                    funcionalidades: request.body.funcionalidad,
                    imagen: request.file.filename,
                    precio: request.body.precio,
                    peso: request.body.peso,
                    descripcion:  request.body.descripcion,
                    calificacion: request.body.calificacion,
                    Categoria_id: request.body.categoria,
                    Fabricante_id: request.body.fabricante,
                    Pais_id: request.body.paisOrigen

                },
                {

                    where: {id: request.body.id}
                
                }

            );
            response.redirect('/admin/products');  
            }

        

        },
        
        deleteProduct: (request, response) =>{     
            
            db.ProductoRelacionado.destroy(
                {

                    where: {
                        [Op.or]:[
                        
                            {Producto_padre_id: request.params.id},
                            {codigoRelacionado:request.params.id}
                        ]

                    }

                }

            );


           
            db.Producto.destroy(
                {

                    where: {id: request.params.id}

                }

            );
            
            response.redirect('/admin/products');

            /*
            let leeArchivo = fs.readFileSync(pathData, 'utf-8');
            let productosArch = JSON.parse(leeArchivo);
            let productoNew = productosArch.filter(producto => producto.id != request.params.id);
            console.log(productoNew);
            let productoString = JSON.stringify(productoNew);
            fs.writeFileSync(pathData, productoString);          
           response.redirect('/admin/products');
           */
                
        }

};
module.exports = productController;
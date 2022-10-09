const db = require('../../database/models');
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const { response } = require('express');

module.exports = {

    producto: (request, response) => {

        db.Producto.findByPk(request.params.id, {

            
            include: [

                {association: "fabricantes"},
                {association: "paises"},
                {association: "categorias"},
                {association:"productosRelacionados"},
                {association:"productoResenas", include: "resenasUsuario"}

           
            ]}).then(function(producto){

                for(i = 0; i <  producto.dataValues.productoResenas.length; i++){

                    console.log("Usuario res: " + producto.dataValues.productoResenas[i].dataValues.resenasUsuario.nombre);

                    let userConf = {

                        id:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.id,
                        nombre:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.nombre,
                        apellido:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.apellido,
                        email:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.email,
                        avatar:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.avatar,
                        esAdmin:  producto.dataValues.productoResenas[i].dataValues.resenasUsuario.esAdmin

                    }

                    producto.dataValues.productoResenas[i].dataValues.resenasUsuario = userConf;
                }

                console.log("longitud resenas productos: " + producto.dataValues.productoResenas.length);

                    return response.status(200).json({
                        total: 1,
                        data: producto,
                        status: 200

                    })


            })

    },

    resumenProductos: (request, response) => {

        db.Producto.findAll({

                group:["Categoria_id"],
                attributes:["Categoria_id",[Sequelize.fn('count', Sequelize.col("Categoria_id")), 'Items_Categoria']],
                include:[{association: "categorias"}]

        }).then(resultados => {

            let totalizadoCategorias = [];
            

           
            for(i = 0; i < resultados.length; i++){

                let totalCategoria = {

                    id: 0,
                    nombre: "",
                    totalItems: 0

                }

                totalCategoria.id = resultados[i].Categoria_id;
                totalCategoria.nombre = resultados[i].categorias.nombre;
                totalCategoria.totalItems = resultados[i].dataValues.Items_Categoria;

                totalizadoCategorias.push(totalCategoria);

            }

            db.Producto.findAll({

                
                attributes:[[Sequelize.fn('count', Sequelize.col("id")), 'total_productos']]

            }).then(total => {

                db.Producto.findAll({

                    attributes:["id", "nombre", "descripcion", "imagen", '"categorias".nombre'],
                    include:[{association: "categorias"}]


                }).then(listadoProd => {    

                    let productosResp = [];

                    for(i = 0; i < listadoProd.length; i++){

                        let prodResp = {

                            id: listadoProd[i].id,
                            nombre: listadoProd[i].nombre,
                            descripcion: listadoProd[i].descripcion,
                            categoria: listadoProd[i].categorias.nombre,
                            imagen: "http://localhost:3001/images/" + listadoProd[i].imagen,
                            detalle: "http://localhost:3001/API/productos/" + listadoProd[i].id

                        }

                        //console.log(prodResp);
                        productosResp.push(prodResp);
                        

                    }

                    let respuestaAPIProd ={

                        count: total[0].dataValues.total_productos,
                        countByCategory: totalizadoCategorias,
                        products: productosResp


                    }

                    return response.status(200).json({
                        total: total[0].dataValues.total_productos,
                        data: respuestaAPIProd,
                        status: 200

                    })
                    
                    //console.log("Listado productos:" + productosResp);
                   // response.send(respuestaAPIProd);
                
                
                })
            
            })

                


            
            
        
        });

    },

    productos: (request, response) => {

        db.Producto.findAll({
            include: [

                {association: "fabricantes"},
                {association: "paises"},
                {association: "categorias"},
                {association:"productosRelacionados"},
                {association:"productoResenas", include: "resenasUsuario"}

           
            ]}).then(function(productos){

                    return response.status(200).json({
                        total: productos.length,
                        data: productos,
                        status: 200

                    })


            })




    },

    adicionarProducto: (request, response) => {

        db.Producto.create({

            nombre: request.body.nombre,
            unidadesDisponibles: request.body.unidadesDisponibles,
            modelo: request.body.modelo,
            funcionalidades: request.body.funcionalidades,
            imagen: request.body.imagen,
            precio: request.body.precio,
            peso: request.body.peso,
            descripcion:  request.body.descripcion,
            calificacion: request.body.calificacion,
            Categoria_id: request.body.Categoria_id,
            Fabricante_id: request.body.Fabricante_id,
            Pais_id: request.body.Pais_id


        }).then(producto => {
            
            return response.status(200).json({

                data: producto,
                status: 200
            })
        })

    },

    eliminarProducto: (request, response) => {

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

        ).then(res => {

            return response.json(res);
        })


    },

    buscarProducto: (request, response) => {

        console.log("Entro a buscar");
        db.Producto.findAll({

            where: { 
                nombre: {[Op.like]: '%' + request.params.busqueda + '%'}
            }

        }).then(productos => {

            return response.status(200).json({

                        total: productos.length,
                        data: productos,
                        status: 200

            })

        })
    }

}
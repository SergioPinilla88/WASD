const db = require('../database/models');
const { Op } = require("sequelize");
const { response } = require('express');


let shopController = {

        carrito: (request, response) => { 

            let userToLog = request.session.usuarioConectado

            if(userToLog){

                db.Compra.findAll({where: [
                                     
                    {estadoCompra: "1"},
                    {Usuario_id: userToLog.id}
                

             ], include: [
                    
                    {association: "comprasUsuario"},
                    {association: "comprasDetalles", include: "detallesCompraProducto"}
                
                ]}).then(compras =>{

                    if(compras.length > 0){
                        //console.log(compras[0].dataValues.comprasDetalles[0]);
                        //response.send(compras);
                        let cantidadProductos = compras[0].dataValues.comprasDetalles.length;
                        let costoTotal = 0;
                        let pesoTotal = 0;

                        for(i = 0; i < compras[0].dataValues.comprasDetalles.length; i++){

                                costoTotal = costoTotal + Number(compras[0].dataValues.comprasDetalles[i].detallesCompraProducto.precio);
                                pesoTotal = pesoTotal + Number(compras[0].dataValues.comprasDetalles[i].detallesCompraProducto.peso);

                        }

                        

                        let totalizadoCarrito = {

                            cantidadProductos: cantidadProductos,
                            costoTotal: costoTotal,
                            pesoTotal: pesoTotal

                        };


                        
                        response.render("newCar", {totales:totalizadoCarrito, compra:compras[0], detalleCompra: compras[0].dataValues.comprasDetalles});
                    }else{

                        response.redirect("/compra/carritoVacio");
                    }

                })

            }else{

                response.send("logueate para ver tu carrito");

            }
    
            //response.render('car');
            
        },

        adicionarProducto: (request, response) => {

            
            let userToLog = request.session.usuarioConectado

            if(userToLog){

                db.Compra.findAll({where: [
                                     
                    {estadoCompra: "1"},
                    {Usuario_id: userToLog.id}
                

                ]}).then(compra => {

                    

                    if(compra.length > 0){
                    
                        db.DetalleCompra.create({

                         Compra_id: compra[0].id,
                         Producto_id: request.params.id

                    });
                
                    response.redirect('/compra/carrito_de_compras');
                
                    }else{

                        db.Compra.create({

                            momentoCompra: null,
                            momentoCreacion: Date.now(),
                            estadoCompra: "1",
                            Usuario_id: userToLog.id


                        }).then(newCompra => {

                        db.Compra.findAll({where: [
                                     
                            {estadoCompra: "1"},
                            {Usuario_id: userToLog.id}
                        
        
                        ]}).then(newCompra1 => {
        
                            console.log("compra: " + newCompra1.id);
        
                            if(newCompra1.length > 0){
                            
                                db.DetalleCompra.create({
        
                                 Compra_id: newCompra1[0].id,
                                 Producto_id: request.params.id
        
                            });
                        
                            response.redirect('/compra/carrito_de_compras');

                            }


                        })
                    
                    });
                    
                    }
                    


                })

                

            }else{

                console.log("Logueate para adicionar un producto");

            }


        },

        eliminarProducto: (request, response) => {

            let userToLog = request.session.usuarioConectado

            if(userToLog){

                db.Compra.findAll({where: [
                                     
                    {estadoCompra: "1"},
                    {Usuario_id: userToLog.id}
                

                ]}).then(compra => {                    

                    if(compra.length > 0){
                    
                        db.DetalleCompra.destroy({

                            where: {
                                    id: request.params.id
                            }

                        });

                    }

                    response.redirect('/compra/carrito_de_compras');
                
                });
            }

        },

        verificaCompra: (request, response) => {

            db.Compra.update({

                momentoCompra: Date.now(),
                estadoCompra: '0'
            },
            {where:{

                id: request.params.id


            }}


            );

            response.redirect('/usuario/perfil');



        },

        detalleCompra: (request, response) => { 

            let userToLog = request.session.usuarioConectado

            if(userToLog){

                db.Compra.findAll({where: [
                                     
                    {id: request.params.id},
                    

             ], include: [
                    
                    {association: "comprasUsuario"},
                    {association: "comprasDetalles", include: "detallesCompraProducto"}
                
                ]}).then(compras =>{

                    if(compras.length > 0){
                        //console.log(compras[0].dataValues.comprasDetalles[0]);
                        //response.send(compras);
                        let cantidadProductos = compras[0].dataValues.comprasDetalles.length;
                        let costoTotal = 0;
                        let pesoTotal = 0;

                        for(i = 0; i < compras[0].dataValues.comprasDetalles.length; i++){

                                costoTotal = costoTotal + Number(compras[0].dataValues.comprasDetalles[i].detallesCompraProducto.precio);
                                pesoTotal = pesoTotal + Number(compras[0].dataValues.comprasDetalles[i].detallesCompraProducto.peso);

                        }

                        

                        let totalizadoCarrito = {

                            cantidadProductos: cantidadProductos,
                            costoTotal: costoTotal,
                            pesoTotal: pesoTotal

                        };


                        
                        response.render("detalleCompra", {totales:totalizadoCarrito, compra:compras[0], detalleCompra: compras[0].dataValues.comprasDetalles});
                    }else{

                        response.redirect("/compra/carritoVacio");
                    }

                })

            }else{

                response.send("logueate para ver tu carrito");

            }
    
            //response.render('car');
            
        },

        carritoVacio: (request, response) =>{

            response.render("carritoVacio");

        }

};

module.exports = shopController;
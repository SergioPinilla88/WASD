const { timingSafeEqual } = require("crypto");
const bcryptjs = require('bcryptjs');
const path = require("path");
const userModel = require("../models/User");
const { validationResult } = require('express-validator');
const db = require("../database/models");

const userController = {

        perfil: (request, response) => { 
            let userToLog = request.session.usuarioConectado;

            db.Usuario.findByPk(userToLog.id,

            {
                include: [

                    {association:"usuarioResenas", include:"resenasProducto"}                    
                             
                ]
            
             }).then(function(usuario){




                db.Compra.findAll({where: [
                                     
                    {estadoCompra: "0"},
                    {Usuario_id: userToLog.id}
                

             ], include: [
                    
                    {association: "comprasUsuario"},
                    {association: "comprasDetalles", include: "detallesCompraProducto"}
                
                ]}).then(compras =>{

                    if(compras.length > 0){
                        //console.log(compras[0].dataValues.comprasDetalles[0]);
                        //response.send(compras);
                        let totalesCompras = [];
                       
                       for(j = 0; j < compras.length; j++){


                            let cantidadProductos = compras[j].dataValues.comprasDetalles.length;
                            let costoTotal = 0;
                            let pesoTotal = 0;

                            for(i = 0; i < compras[j].dataValues.comprasDetalles.length; i++){

                                costoTotal = costoTotal + Number(compras[j].dataValues.comprasDetalles[i].detallesCompraProducto.precio);
                                pesoTotal = pesoTotal + Number(compras[j].dataValues.comprasDetalles[i].detallesCompraProducto.peso);

                            }                        

                            let totalizadoCarrito = {

                                id: compras[j].dataValues.id,
                                fechaCierreCompra: compras[j].dataValues.momentoCompra,
                                cantidadProductos: cantidadProductos,
                                costoTotal: costoTotal,
                                pesoTotal: pesoTotal

                            };

                            totalesCompras.push(totalizadoCarrito);

                        }

                
                //console.log(usuario.dataValues.usuarioResenas[0].dataValues);

                    return response.render("perfil", {compras: totalesCompras, userToLog:usuario, resenas: usuario.dataValues.usuarioResenas});



                }

            });

        });
            
    },

        login: (request, response) => { 
            response.render('newLogin');    
        },
        loginProcess: (request, response) => {

          
            
            db.Usuario.findAll({

                where:{email: request.body.correo}
        
            }).then(function(usuarios){                   
                
                
                if(usuarios.length == 0){

                   return response.render('newLogin', {
                        errors: {
                            correo: {
                                    msg: "correo invalido"
                            }
                        },
                        old: request.body
                    });

                }

                let userToLog = usuarios[0];
                let pwdOK = bcryptjs.compareSync(request.body.pwd, userToLog.password);

                if(pwdOK){
                    delete userToLog.password;
                    request.session.usuarioConectado = userToLog;

                    if(request.body.recordarme != undefined){

                        response.cookie("recordarme", request.body.correo, {maxAge: 60000});
                    }
                    
                    response.redirect("perfil");
                }else{


                    response.render('newLogin', {
                        errors: {
                            pwd: {
                                    msg: "contraseña incorrecta"
                            }
                        },
                        old: request.body
                

                    });
                }

            });

      
        },

        logOut: (request, response) => {
          
            response.clearCookie("recordarme");
            request.session.destroy();
           response.redirect('/');
        },

        registroView: (request, response) => {  
            response.render('registro');         
        },

        registro: (request, response) => {  
            
            let resultValidation = validationResult(request);
            let errors = resultValidation.mapped();  

            if(request.body.pwd != request.body.pwdConf){       
                errors = {
                    ...errors,
                    pwdConf: {
                         msg: "Las contraseñas deben ser iguales"
                    }
                }  
             }

            db.Usuario.findAll({

                where:{email: request.body.correo}
        
            }).then(function(usuarios){   
                
                let existeCorreo = false;

                if(usuarios.length > 0){

                    existeCorreo = true;

                    errors = {
                        ...errors,
                        correo: {
                             msg: "Este correo ya esta registrado"
                        }
                    };

                }

                
                if(!resultValidation.isEmpty() || existeCorreo){
                   
                    return response.render('registro', {
                        errors: errors, 
                        old: request.body
                     });
 
                }else{

                    let nuevoUsuario = {
                        nombre: request.body.nombre,
                        apellido: request.body.apellido,
                        email: request.body.correo,
                        password: bcryptjs.hashSync(request.body.pwd, 10),
                        avatar: 'default_avatar.jpg',
                        esAdmin: '0'                   
                       } 
                       if(request.file){
                           nuevoUsuario.avatar = request.file.filename;
                       } 
                       
                       if(request.body.esAdmin != undefined){

                           nuevoUsuario.esAdmin = '1';

                       }
                       
                   db.Usuario.create(nuevoUsuario);
                   return response.redirect("/usuario/login");
                    


                }


            });
                
            


            
            
            

        /*    
        let resultValidation = validationResult(request);
        let noExisteCorreo = userModel.findByField("email", request.body.correo).length == 0;       
        if(resultValidation.isEmpty()&& noExisteCorreo && 
        request.body.pwd == request.body.pwdConf){          
                  let nuevoUsuario = {
                     id: 0,
                     first_name: request.body.nombre,
                     last_name: request.body.apellido,
                    email: request.body.correo,
                    password: bcryptjs.hashSync(request.body.pwd, 10),
                    avatar: 'default_avatar.jpg'                   
                    } 
                    if(request.file){
                        nuevoUsuario.avatar = request.file.filename;
                    }                   
                userModel.create(nuevoUsuario);
                response.redirect("/usuario/login");
            }else{
                let errors = resultValidation.mapped();               
                if(!noExisteCorreo){               
                  errors = {
                        ...errors,
                        correo: {
                             msg: "Este correo ya esta registrado"
                        }
                    }                   
                 }
                 if(request.body.pwd != request.body.pwdConf){       
                    errors = {
                        ...errors,
                        pwdConf: {
                             msg: "Las contraseñas deben ser iguales"
                        }
                    }  
                 }
                return response.render('registro', {
                             errors: errors,
                             old: request.body
                    });
            }   */           
        },


        editPerfilView:(req, res)=>{
           
            db.Usuario.findByPk(req.params.id).then(function(usuarios){
                res.render('editPerfil', {usuario:usuarios})
            });
        },
        editPerfil:(req, res)=>{
            let resultValidation = validationResult(req);
            let errors = resultValidation.mapped();
            console.log(errors);

            if(req.body.pwd != req.body.pwdConf){       
                errors = {
                    ...errors,
                    pwdConf: {
                         msg: "Las contraseñas deben ser iguales"
                    }
                }  
             }

            db.Usuario.findAll({

                where:{email: req.body.correo}
        
            }).then(function(usuarios){   
                
                
                if(!resultValidation.isEmpty()){
                    db.Usuario.findByPk(req.params.id).then(function(usuarios){
                        return res.render('editPerfil', {
                            errors: errors, 
                            old: req.body,
                            usuario: usuarios
                         });

                    });
                    
                     }
                     else{
                        let usuarioActualizado = {

                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.correo,
                        password : bcryptjs.hashSync(req.body.pwd, 10),
                        avatar: 'default_avatar.jpg'
                }
                    if(req.file){
                        usuarioActualizado.avatar = req.file.filename;
                }
                        db.Usuario.update(usuarioActualizado,  
                {
                        where: {id: req.body.id}
                }
                );
               
                
                res.redirect('/usuario/perfil');
                }
            }); 
            
        },


        adicionaResena:(request, response) =>{
            //console.log(request.body.resenaNueva);
            //console.log(request.body.usuarioIdResena);
            //console.log(request.body.productoIdResena);

            let nuevaResena = {
                calificacion: request.body.calificaResena,
                resena: request.body.resenaNueva,
                Usuario_id: request.body.usuarioIdResena,
                Producto_id: request.body.productoIdResena,                
               } 
               
               
           db.Resena.create(nuevaResena);
        
           return response.redirect("/producto/" + request.body.productoIdResena);


            //return response.send("Reseña: " + request.body.resenaNueva + " Usuario: " + request.body.usuarioIdResena + " Producto: " + request.body.productoIdResena + " Calificación: " + request.body.calificaResena );

        },

        editaResena:(request,response)=>{
            
            console.log(request.body.resenaEdit);
            console.log(request.body.usuarioIdResena);
            console.log(request.body.productoIdResena);
            console.log(request.body.idResena);
            console.log(request.body.calificaResena);

            let nuevaResena = {
                calificacion: request.body.calificaResena,
                resena: request.body.resenaEdit,
                Usuario_id: request.body.usuarioIdResena,
                Producto_id: request.body.productoIdResena,                
            };

            db.Resena.update(

                {
                    calificacion: request.body.calificaResena,
                    resena: request.body.resenaEdit,
                    Usuario_id: request.body.usuarioIdResena,
                    Producto_id: request.body.productoIdResena,    
                   

                },
                {

                    where: {id: request.body.idResena}
                
                });
            
                response.redirect("/usuario/perfil");
            

        },

        eliminaResena: (request, response) => {

            db.Resena.destroy(
                {

                    where: {id: request.params.id}

                }
            );

            response.redirect("/usuario/perfil");

        }
};
module.exports = userController;
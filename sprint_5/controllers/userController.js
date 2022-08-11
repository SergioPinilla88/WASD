const { timingSafeEqual } = require("crypto");
const bcryptjs = require('bcryptjs');
const path = require("path");
const userModel = require("../models/User");
const { validationResult } = require('express-validator');

const userController = {

        perfil: (request, response) => { 
            let userToLog = request.session.usuarioConectado;
            response.render("perfil", {userToLog});
        },

        login: (request, response) => { 
            response.render('newLogin');    
        },
        loginProcess: (request, response) => {

            if(userModel.findByField("email", request.body.correo).length == 0){
                response.render('newLogin', {
                    errors: {
                        correo: {
                                msg: "El correo no esta registrado"
                        }
                    },
                    old: request.body
                });
            }else{

                userToLog = userModel.findByField("email", request.body.correo)[0];
                let pwdOK = bcryptjs.compareSync(request.body.pwd, userToLog.password);

                if(pwdOK){
                    delete userToLog.password;
                    request.session.usuarioConectado = userToLog

                    if(request.body.recordarme != undefined){

                        response.cookie("recordarme", request.body.correo, {maxAge: 60000});
                    }
                    // console.log(userToLog);
                    // console.log("verifica: " + pwdOK);
                    response.render("perfil", {userToLog});
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
            };
        },
        logOut: (request, response) => {
            request.session.destroy();
           response.redirect('/');
        },
        registroView: (request, response) => {  
            response.render('registro');         
        },
registro: (request, response) => {     
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
            }              
        }
};
module.exports = userController;
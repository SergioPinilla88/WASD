const userModel = require("../models/User");

function cookieAuthMiddleWare(request, response, next){

    if(request.cookies.recordarme != undefined && request.session.usuarioConectado == undefined){

        let userToLog = userModel.findByField("email", request.cookies.recordarme)[0];
        request.session.usuarioConectado = userToLog;

    }
    
    next();

}

module.exports = cookieAuthMiddleWare;
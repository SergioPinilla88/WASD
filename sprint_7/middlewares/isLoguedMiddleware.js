const session = require("express-session");

function isLoguedMiddleware(request, response, next){

        //console.log("pase por el MID Logged");
        response.locals.isLogged = false;  
        if(request.session && request.session.usuarioConectado){
            response.locals.isLogged = true;
            response.locals.usuarioConectado = request.session.usuarioConectado;
        }
        next();
}

module.exports = isLoguedMiddleware;
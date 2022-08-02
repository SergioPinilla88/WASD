function toLoginMiddleware(request, response, next){

    if(!request.session.usuarioConectado){

       return  response.redirect("/usuario/login");

    }

    next();


}

module.exports = toLoginMiddleware;
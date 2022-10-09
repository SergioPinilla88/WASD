function guestMiddleware(request, response, next){

    if(request.session.usuarioConectado){

       return  response.redirect("/usuario/perfil");

    }

    next();


}

module.exports = guestMiddleware;
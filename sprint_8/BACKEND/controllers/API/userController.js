const db = require('../../database/models');
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const { response } = require('express');

module.exports = {

    usuarios: (request, response) => {


        db.Usuario.findAll({
            
            attributes:[[Sequelize.fn('count', Sequelize.col("id")), 'total_usuarios']]
            
        }).then(contUsuarios => {


            db.Usuario.findAll({
            
                attributes:["id", "nombre", "apellido", "email", "avatar"]
                
            }).then(detalleUsers => {

                let respuestaAPIUser = {

                    count: contUsuarios[0].dataValues.total_usuarios,
                    users: detalleUsers

                }


                return response.status(200).json({
                    total: contUsuarios[0].dataValues.total_usuarios,
                    data: respuestaAPIUser,
                    status: 200

                })
               

            })



        })

            


    },

    perfil: (request, response) => { 
        

        db.Usuario.findByPk(request.params.id,

        {
            include: [

                {association:"usuarioResenas", include:"resenasProducto"}                    
                         
            ]
        
         }).then(function(usuario){




            db.Compra.findAll({where: [
                                 
                {estadoCompra: "0"},
                {Usuario_id:request.params.id}
            

         ], include: [
                
                {association: "comprasUsuario"},
                {association: "comprasDetalles", include: "detallesCompraProducto"}
            
            ]}).then(compras =>{

                let totalesCompras = [];

                if(compras.length > 0){
                    //console.log(compras[0].dataValues.comprasDetalles[0]);
                    //response.send(compras);
                    
                   
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

               // return response.render("perfil", {compras: totalesCompras, userToLog:usuario, resenas: usuario.dataValues.usuarioResenas});



            }

            let usuarioRespuesta = {

                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                avatar: "http://localhost:3001/images/avatars/" + usuario.avatar,

            }

            let dataAPI = {

                usuario: usuarioRespuesta,
                compras: totalesCompras,
                resenas: usuario.dataValues.usuarioResenas

            }

            return response.status(200).json({
                total: 1,
                data: dataAPI,
                status: 200

            })




           // return response.render("perfil", {compras: totalesCompras, userToLog:usuario, resenas: usuario.dataValues.usuarioResenas});

        });

    });
        
}


}








const db = require('../../database/models');
const { Op } = require("sequelize");

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

                    return response.status(200).json({
                        total: 1,
                        data: producto,
                        status: 200

                    })


            })

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
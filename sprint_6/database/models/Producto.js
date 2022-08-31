
module.exports = (sequelize, dataTypes) => {
   
    let alias = 'Producto';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false

        },
        unidadesDisponibles:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        modelo:{
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        funcionalidades:{
            type: dataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        peso:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        calificacion:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        Categoria_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Fabricante_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Pais_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {

        tableName: "Producto",
        timestamps: false

    };
   
    const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models){

        Producto.belongsTo(models.Fabricante, {
            as: "fabricantes",
            foreignKey: "Fabricante_id"

        });

        Producto.belongsTo(models.Pais, {
            as: "paises",
            foreignKey: "Pais_id"

        });

        Producto.belongsTo(models.Categoria, {
            as: "categorias",
            foreignKey: "Categoria_id"

        });

        Producto.hasMany(models.ProductoRelacionado, {
            as: "productosRelacionados",
            foreignKey: "Producto_padre_id"

        });

        Producto.hasMany(models.Resena, {
            as: "productoResenas",
            foreignKey: "Producto_id"

        });

};


    return Producto;

}
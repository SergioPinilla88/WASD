const Producto = require("./Producto");

module.exports = (sequelize, dataTypes) => {
   
    let alias = 'ProductoRelacionado';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Producto_padre_id: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        codigoRelacionado: {
            type: dataTypes.INTEGER,
            allowNull: false

        }
    };
    let config = {

        tableName: "ProductoRelacionado",
        timestamps: false

    };
   
    const ProductoRelacionado = sequelize.define(alias, cols, config);

    ProductoRelacionado.associate = function(models){

        ProductoRelacionado.belongsTo(models.ProductoRelacionado, {
            as: "relacionados",
            foreignKey: "Producto_padre_id"

        });

    }

   
    return ProductoRelacionado;

}
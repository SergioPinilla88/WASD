module.exports = (sequelize, dataTypes) => {
   
    let alias = 'Categoria';
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

        }
    };
    let config = {

        tableName: "Categoria",
        timestamps: false

    };
   
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){

        Categoria.hasMany(models.Producto, {
            as: "productosCategoria",
            foreignKey: "Categoria_id"

        });

};

    return Categoria;

}

module.exports = (sequelize, dataTypes) => {
   
    let alias = 'Fabricante';
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
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {

        tableName: "Fabricante",
        timestamps: false

    };
   
    const Fabricante = sequelize.define(alias, cols, config);

Fabricante.associate = function(models){

        Fabricante.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "Fabricante_id"

        });

};

    return Fabricante;

}
module.exports = (sequelize, dataTypes) => {
   
    let alias = 'Pais';
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

        tableName: "Pais",
        timestamps: false

    };
   
    const Pais = sequelize.define(alias, cols, config);

    Pais.associate = function(models){

        Pais.hasMany(models.Producto, {
            as: "productosPais",
            foreignKey: "Pais_id"

        });

};

    return Pais;

}
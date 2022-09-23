module.exports =(sequelize, DataTypes)=>{
    let alias='Compra';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        momentoCompra:{
            type: DataTypes.DATE
        },
        momentoCreacion:{
            type: DataTypes.DATE
        },
        estadoCompra:{
            type:DataTypes.TINYINT(1)
        },
        Usuario_id:{
            type:DataTypes.INTEGER
        }
    };
    let config= {
        tableName: "Compra",
        timestamps : false
    };
const Compra= sequelize.define(alias,cols, config);
    Compra.associate = function(models){
        Compra.belongsTo(models.Usuario,{
            as: "comprasUsuario",
            foreignKey: "Usuario_id"
        });
       Compra.hasMany(models.DetalleCompra,{
            as: "comprasDetalles",
            foreignKey: "Compra_id"
        })

    }
   
return Compra;
}
module.exports =(sequelize, DataTypes)=>{
    let alias='DetalleCompra';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Producto_id:{
            type:DataTypes.INTEGER
        },
        Compra_id:{
            type:DataTypes.INTEGER
        }
    };
    let config= {
        tableName: "DetalleCompra",
        timestamps : false
    };
const DetalleCompra= sequelize.define(alias,cols, config);
    DetalleCompra.associate = function(models){
        DetalleCompra.belongsTo(models.Compra,{
            as: "detallesCompra",
            foreignKey: "Compra_id"
        });
        DetalleCompra.belongsTo(models.Producto,{
            as: "detallesCompraProducto",
            foreignKey: "Producto_id"
        })
       

    }
   
return DetalleCompra;
}
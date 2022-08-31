module.exports =(sequelize, DataTypes)=>{
    let alias='Resena';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        calificacion:{
            type: DataTypes.INTEGER,
        },
        resena:{
            type: DataTypes.STRING,
        },
        Usuario_id:{
            type:DataTypes.INTEGER
        },
        Producto_id:{
            type:DataTypes.INTEGER
        }
    };
    let config= {
        tableName: "Resena",
        timestamps : false
    };
const Resena= sequelize.define(alias,cols, config);
    Resena.associate = function(models){
        Resena.belongsTo(models.Usuario,{
            as: "resenasUsuario",
            foreignKey: "Usuario_id"
        });
        Resena.belongsTo(models.Producto,{
            as: "resenasProducto",
            foreignKey: "Producto_id"
        }); 

    }
   
return Resena;
}
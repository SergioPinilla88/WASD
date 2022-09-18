

module.exports =(sequelize, DataTypes)=>{
    let alias='Usuario';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(45)
        },
        apellido:{
            type: DataTypes.STRING(45)
        },
        email:{
            type: DataTypes.STRING(200)
        },
        password:{
            type: DataTypes.STRING(45)
        },
        avatar:{
            type: DataTypes.STRING(200)
        },
        esAdmin:{
            type: DataTypes.TINYINT(1)	
        }
    };
    let config= {
        tableName: "Usuario",
        timestamps : false
    };
const Usuario = sequelize.define(alias,cols, config);
    Usuario.associate = function(models){
       /* Usuario.hasMany(models.Compra,{
            as: "compras",
            foreignKey: "Usuario_id"
        });*/
        Usuario.hasMany(models.Resena,{
            as: "usuarioResenas",
            foreignKey: "Usuario_id"
        }) 
    } 
    
return Usuario ;
}
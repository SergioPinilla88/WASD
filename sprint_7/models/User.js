
const fs = require('fs');

const User = {

    fileName: './data/usuarios.json',
    getData: function(){

        return(JSON.parse(fs.readFileSync(this.fileName,'utf-8')));


    },

    findAll: function(){

        return this.getData();

    },

    findByPK: function(idUser){

        let leeArchivo = this.findAll();
        
            
        let userFind = leeArchivo.find(usuario => usuario.id == idUser);
            
           if(!userFind){

                console.log("No existe el usuario");

            }else{

                console.log("usuario encontrado");

            }
            
        return userFind;


    },

    findByField: function(campo = "", valor = ""){

        let leeArchivo = this.findAll();
        
            
        let userFind = leeArchivo.filter(usuario => usuario[campo] == valor);
            
           if(!userFind){

                console.log("No existe el usuario");

            }else{

                console.log("usuario encontrado");

            }
            
        return userFind;


    },

    newUserId: function(){

        let leeArchivo = this.findAll();

        if(leeArchivo.length > 0){

            return leeArchivo[leeArchivo.length - 1].id + 1;

        }else{

            return 1;
        }

    },

    create: function(usuarioData){
    
        let leeArchivo = this.findAll();
        usuarioData.id = this.newUserId();
        leeArchivo.push(usuarioData);
        let userString = JSON.stringify(leeArchivo);

        fs.writeFileSync(this.fileName, userString, null, "");
        return true;


    },

    delete: function(id){

        let leeArchivo = this.findAll();
        let newUsuarios = leeArchivo.filter(usuario => usuario.id != id);
        let usuariosString = JSON.stringify(newUsuarios);
        fs.writeFileSync(this.fileName, usuariosString);
        return true;          


    }


};

module.exports = User;
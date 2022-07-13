const path = require("path");

let userController = {

        login: (request, response) => { 
    
            response.render('login');
            
        },

        registro: (request, response) => { 
    
            response.render('registro');
            
        }

};

module.exports = userController;
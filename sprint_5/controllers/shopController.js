const path = require("path");

let shopController = {

        carrito: (request, response) => { 
    
            response.render('car');
            
        }

};

module.exports = shopController;
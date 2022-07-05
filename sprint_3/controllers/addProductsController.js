const path = require("path");

let addProductsController = {

        addProducts: (request, response) => { 
    
            response.render('addProducts');
            
        }

};

module.exports = addProductsController;
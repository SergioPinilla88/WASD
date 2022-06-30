const path = require("path");

let productController = {

        producto: (request, response) => { 
    
            response.render('productDetail');
            
        }

};

module.exports = productController;
const path = require("path");

let mainController = {

        home: (request, response) => { 
    
            response.render('home');
            
        }

};

module.exports = mainController;
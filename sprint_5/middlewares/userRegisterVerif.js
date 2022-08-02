const { body } = require('express-validator');


const userRegisterVerif = [

        body('nombre').notEmpty().withMessage("Debes diligenciar un nombre"),
        body('apellido').notEmpty().withMessage("Debes diligenciar un apellido"),
        body('correo').isEmail().withMessage("Debes diligenciar con correo valido"),
        body('pwd').notEmpty().withMessage("Debes diligenciar un pwd")
                   
        
          
    
];




module.exports = userRegisterVerif;


   





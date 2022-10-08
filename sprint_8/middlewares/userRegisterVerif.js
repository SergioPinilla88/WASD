const path = require('path');
const { body } = require('express-validator');
const { error } = require('console');

const userRegisterVerif = [
        body('nombre').notEmpty().withMessage("Debes diligenciar un nombre").bail()
        .isLength({min:3, max: 30}).withMessage('Debes colocar caracteres, 3 minimo y 30 maximo'),
        body('apellido').notEmpty().withMessage("Debes diligenciar un apellido").bail()
        .isLength({min:3, max: 30}).withMessage('Debes colocar caracteres, 3 minimo y 30 maximo'),
        body('correo').isEmail().withMessage("Debes diligenciar con correo valido"),
        body('pwd').notEmpty().withMessage("Debes diligenciar un pwd").bail()
        .isLength({min:8, max: 50}).withMessage('Debes colocar caracteres, 8 minimo y 50 maximo'),
		body('avatar').custom((value, { req }) => {
			let file = req.file;
			let acceptedExtensions = ['.jpg', '.png', '.gif'];
			if (file) {
				let fileExtension = path.extname(file.originalname);
				if (!acceptedExtensions.includes(fileExtension)) {
					throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
				}
			}
			return true;
		})
		
];

module.exports = userRegisterVerif;


   





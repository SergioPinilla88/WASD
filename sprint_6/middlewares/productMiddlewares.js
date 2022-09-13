const path = require('path');
const { body } = require('express-validator');


const productMiddlewares = [
    body('nombre').notEmpty().withMessage("Falta el nombre del prpducto ").bail()
    .isLength({min:3, max: 100}).withMessage('Debes colocar caracteres, 3 minimo y 30 maximo'),
    body('descripcion').notEmpty().withMessage("Describa el producto por favor").bail()
    .isLength({min:20, max: 1500}).withMessage('Debes colocar caracteres, 20 minimo y 1500 maximo'),
    body('modelo').notEmpty().withMessage("Si desconoce el modelo coloque 'Desconocido' por favor").bail()
    .isLength({min:1, max: 50}).withMessage('Debes colocar caracteres, 1 minimo y 50 maximo'),
    body('funcionalidad').notEmpty().withMessage("Describa la funcionalidad del producto por favor").bail()
    .isLength({min:3, max: 1500}).withMessage('Debes colocar caracteres, 3 minimo y 1500 maximo'),
    body('peso').notEmpty().withMessage("Si desconoce el peso coloque 'Desconocido' por favor").bail()
    .isNumeric().isLength({min:1, max: 10}).withMessage('Debes colocar caracteres, 1 minimo y 10 maximo'),
     body('calificacion').isLength({min:1, max: 5}).isFloat({max:5})
     .withMessage('Debes colocar caracteres, 1 minimo y 5 maximo'),
    body('precio').notEmpty().withMessage("Coloque el precio del producto por favor").bail()
    .isNumeric().isLength({min:1, max: 10}).withMessage('Debes colocar caracteres, 1 minimo y 10 maximo'),
     body('cantidad').notEmpty().withMessage("Describa el producto por favor").bail()
     .isNumeric().isLength({min:1, max: 5}).withMessage('Debes colocar caracteres, 1 minimo y 5 maximo'),
    body('image').custom((value, { req }) => {
let file = req.file;
let acceptedExtensions = ['.jpg', '.png', '.gif','jfif','jpeg'];
if (!file) {
    throw new Error('Tienes que subir una imagen');
} else {
    let fileExtension = path.extname(file.originalname);
    if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son 
                    ${acceptedExtensions.join(', ')}`);
    }
}
return true;
})  
];
module.exports = productMiddlewares;
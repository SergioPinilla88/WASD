const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const upload = require('../middlewares/fileUpload');
const guestMiddleware = require('../middlewares/guestMiddleware');
const toLoginMiddleware = require('../middlewares/toLoginMiddleware');
const validacionesRegistro = require('../middlewares/userRegisterVerif');

/*const { body } = require('express-validator');


const validateCreateForm = [

    body('nombre').notEmpty().withMessage("Debes diligenciar un nombre"),
    body('apellido').notEmpty().withMessage("Debes diligenciar un apellido"),
    body('correo').isEmail().withMessage("Debes diligenciar con correo valido"),
    body('pwd').notEmpty().withMessage("Debes diligenciar un pwd"),
   




];

*/
router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);
router.get('/registro', guestMiddleware, userController.registroView);
router.get('/perfil', toLoginMiddleware, userController.perfil);
router.get('/logout', userController.logOut);
router.post('/registro', upload.single('avatar'), validacionesRegistro,  userController.registro);

// upload.single('avatar')

module.exports = router;
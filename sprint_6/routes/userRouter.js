const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const upload = require('../middlewares/fileUpload');
const guestMiddleware = require('../middlewares/guestMiddleware');
const toLoginMiddleware = require('../middlewares/toLoginMiddleware');
const validacionesRegistro = require('../middlewares/userRegisterVerif');


router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);
router.get('/registro', guestMiddleware, userController.registroView);
router.get('/perfil', toLoginMiddleware, userController.perfil);
router.get('/logout', userController.logOut);
router.post('/registro', upload.single('avatar'),validacionesRegistro,userController.registro);


module.exports = router;
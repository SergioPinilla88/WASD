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
router.get('/editPerfil/:id', userController.editPerfilView);
router.get('/logout', userController.logOut);
router.put('/editPerfil/:id',upload.single('image'),validacionesRegistro, userController.editPerfil);
router.post('/registro', upload.single('avatar'),validacionesRegistro,userController.registro);
router.post('/resena', userController.adicionaResena);
router.put('/editaResena/:idResena', userController.editaResena);
router.delete('/deleteResena/:id', userController.eliminaResena);



module.exports = router;
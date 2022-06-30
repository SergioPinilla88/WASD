const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/login', userController.login);
router.get('/registro', userController.registro);


module.exports = router;
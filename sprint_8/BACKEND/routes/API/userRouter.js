const express = require('express');
let userController = require("../../controllers/API/userController");
const router = express.Router();



router.get('/', userController.usuarios);
router.get('/:id', userController.perfil);




module.exports = router;
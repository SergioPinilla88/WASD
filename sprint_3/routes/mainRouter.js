const express = require('express');
let principalController = require("../controllers/mainController");
const router = express.Router();


router.get('/', principalController.home);


module.exports = router;
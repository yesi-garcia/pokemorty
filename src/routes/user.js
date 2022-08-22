const express = require('express');
const router = express.Router();
const { validarLogin, validarRegistro } = require('../validators/user');
const { registrarUser } = require('../controllers/user');


router.post("/registro", validarRegistro, registrarUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { handleHttpError } = require('../helpers/handleError');
const { validarLogin, validarRegistro } = require('../validators/user');
const { registrarUser } = require('../controllers/user');
const intanciaAxios = require('../helpers/intanciaAxios');

router.post("/registro", validarRegistro, registrarUser);

module.exports = router;
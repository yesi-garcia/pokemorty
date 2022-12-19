const express = require('express');
const { get } = require('.');
const router = express.Router();
getApiPersonajes = require('../controllers/traerPersonajes');
registrarEnApi = require('../controllers/resgistrarEnApi')

router.get('/', getApiPersonajes);
router.post('/enviar', registrarEnApi);

module.exports = router;
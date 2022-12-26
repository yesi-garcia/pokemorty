const express = require('express');
const router = express.Router();
const enviarRegistroADeposito = require('../controllers/enviarDeposito');

router.post('/insertar', enviarRegistroADeposito);

module.exports = router;
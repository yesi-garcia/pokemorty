const express = require('express');
const router = express.Router();
const enviarDeposito = require('../controllers/enviarDeposito');

router.post('/', enviarDeposito);

module.exports = router;
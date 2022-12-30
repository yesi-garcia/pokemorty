const express = require('express');
const router = express.Router();
const enviarRegistroADeposito = require('../controllers/enviarDeposito');
const depositarPokemon = require('../controllers/depositarPokemon');

router.post('/insertar', enviarRegistroADeposito);
router.put('/depositar/:id', depositarPokemon);
module.exports = router;
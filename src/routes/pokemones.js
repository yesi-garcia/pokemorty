const express = require('express');
const router = express.Router();
const traerPokemones = require('../controllers/traerPokemones');

router.get('/', traerPokemones);
module.exports = router;
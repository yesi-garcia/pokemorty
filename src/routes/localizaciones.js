const express = require('express');
const router = express.Router();
const traerLocalizaciones = require('../controllers/traerLocalizaciones');

router.get('/', traerLocalizaciones);

module.exports = router;
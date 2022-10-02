const traerApi = require('../controllers/traerApi');
const express = require('express');
const router = express.Router();

router.get('/traerapi', traerApi);

module.exports = router;
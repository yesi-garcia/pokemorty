const traerApi = require('../controllers/traerApi');
const registtrarEnApi = require('../controllers/resgistrarEnApi');
const express = require('express');
const router = express.Router();

router.get('/traerapi', traerApi);
router.post('/registro', registtrarEnApi);

module.exports = router;
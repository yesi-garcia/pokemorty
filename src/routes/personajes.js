const express = require('express');
const { get } = require('.');
const router = express.Router();
getApiPersonajes = require('../controllers/traerPersonajes');


router.get('/', getApiPersonajes);

module.exports = router;
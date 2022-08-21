const express = require('express');
const router = express.Router();
const { registrarUser } = require('../controllers/user');

router.get("/", registrarUser);

module.exports = router;
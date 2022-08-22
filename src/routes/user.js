const express = require('express');
const router = express.Router();
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../helpers/handlePassword');
const { userModel } = require('../models/index')

const { validarLogin, validarRegistro } = require('../validators/user');
//const { registrarUser } = require('../controllers/user');


//router.get("/", registrarUser);
router.post("/registro", validarRegistro, async(req, res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password)
    const body = {...req, password: passwordHash }
    const data = await userModel.create(body);
    data.set('password', undefined, { strict: false })
    res.send({ data });
});

module.exports = router;
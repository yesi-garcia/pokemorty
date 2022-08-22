const { handleHttpError } = require('../helpers/handleError');
const { tokenSing } = require('../helpers/handleJwt');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../helpers/handlePassword');
const { userModel } = require('../models/index')

const registrarUser = async(req, res) => {
    try {
        req = matchedData(req);
        const passwordHash = await encrypt(req.password)
        const body = {...req, password: passwordHash }
        const dataUser = await userModel.create(body);
        dataUser.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSing(dataUser),
            user: dataUser
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR-EN-REGISTRARSE');
    }
}
module.exports = { registrarUser };
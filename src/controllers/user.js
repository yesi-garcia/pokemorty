const { handleHttpError } = require('../helpers/handleError');

const registrarUser = async(req, res) => {
    try {
        const data = await ('registrado');
        res.send({ data });

    } catch (error) {
        handleHttpError(res, 'ERROR-EN-REGISTRARSE');
    }
}
module.exports = { registrarUser };
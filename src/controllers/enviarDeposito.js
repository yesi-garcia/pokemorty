const insertarEnDeposito = require('../business/insertarEnDeposito');
const { handleHttpError } = require('../helpers/handleError');
const enviarRegistroADeposito = async(req, res, _next) => {
    try {
        const {
            body: {
                personaje,
                pokemon,
                localizacion
            }
        } = req;

        const response = await insertarEnDeposito({ personaje, pokemon, localizacion });
        res.json(response);
    } catch (error) {
        handleHttpError(res, error.message, error.code);
    }
}
module.exports = enviarRegistroADeposito;
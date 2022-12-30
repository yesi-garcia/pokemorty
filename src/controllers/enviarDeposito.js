const insertarEnDeposito = require('../business/insertarEnDeposito');
const { handleHttpError } = require('../helpers/handleError');
const enviarRegistroADeposito = async(req, res, _next) => {
    try {
        const {
            body: {
                nombre,
                personaje,
                pokemon,
                localizacion_origen,
                localizacion_destino
            }
        } = req;

        const response = await insertarEnDeposito({ nombre, personaje, pokemon, localizacion_origen, localizacion_destino });
        res.json(response);
    } catch (error) {
        handleHttpError(res, error.message, error.code);
    }
}
module.exports = enviarRegistroADeposito;
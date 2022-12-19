const { handleHttpError } = require('../helpers/handleError');
const personajes = require('../business/getPersonajesFromApi');
const insertarPersonajes = require('../business/insertPersonajes');
const traerPersonajes = async(_req, res, _next) => {
    try {

        const response = await insertarPersonajes();
        res.json(response.data);
    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
}
module.exports = traerPersonajes;
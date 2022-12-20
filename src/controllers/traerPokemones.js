const insertarPokemones = require('../business/insertarPokemones');
const { handleHttpError } = require('../helpers/handleError');
const traerPokemones = async(_req, res, _next) => {
    try {
        const response = await insertarPokemones();
        res.json(response)
    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
}
module.exports = traerPokemones;
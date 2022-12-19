const pokemones = require('../business/getPokemonesFromApi');
const { handleHttpError } = require('../helpers/handleError');
const traerPokemones = async(_req, res, _next) => {
    try {
        const response = await pokemones();
        res.json(response.data)
    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
}
module.exports = traerPokemones;
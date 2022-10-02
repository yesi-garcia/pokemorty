const instanciaAxios = require('../helpers/intanciaAxios');
const { handleHttpError } = require('../helpers/handleError');
const intanciaAxios = require('../helpers/intanciaAxios');

const traerApi = async(req, res, _next) => {
    const getParams = {
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        params: {},
        headers: {}
    }

    try {
        const response = await intanciaAxios.get(getParams);
        res.send(response.data);

    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
}
module.exports = traerApi;
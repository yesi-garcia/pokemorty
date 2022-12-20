const intanciaAxios = require('../helpers/intanciaAxios');
const { handleHttpError } = require('../helpers/handleError');

module.exports = async() => {
    try {
        const getParams = {
            url: 'https://pokeapi.co/api/v2/pokemon',
            params: {},
            headers: {}
        };
        return await intanciaAxios.get(getParams);
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'ERROR-EN-TRAER-API');
    }
};
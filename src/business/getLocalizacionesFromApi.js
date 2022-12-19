const intanciaAxios = require('../helpers/intanciaAxios');
const { handleHttpError } = require('../helpers/handleError');

module.exports = async() => {
    try {
        const getParams = {
            url: 'https://rickandmortyapi.com/api/location',
            params: {},
            headers: {}
        }
        return await intanciaAxios.get(getParams);
    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
}
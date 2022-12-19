const intanciaAxios = require('../helpers/intanciaAxios');
const { handleHttpError } = require('../helpers/handleError');

const insertarRegistroEnApi = async(req, res, _next) => {

    const {
        body: {
            name,
            status,
            species,
            type,
            gender,
            origin,
            image
        }
    } = req;

    const request = {
        url: 'https://rickandmortyapi.com/api/character',
        data: {
            name,
            status,
            species,
            type,
            gender,
            origin,
            image
        },
        headers: {}
    }
    try {
        const response = await intanciaAxios.post(request);
        res.send(response.data);
    } catch (error) {
        handleHttpError(res, 'ERROR');
    }
}

module.exports = insertarRegistroEnApi;
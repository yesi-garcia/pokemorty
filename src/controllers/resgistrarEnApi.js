const intanciaAxios = require('../helpers/intanciaAxios');
const { handleHttpError } = require('../helpers/handleError');

const insertarRegistroEnApi = async(req, res, _next) => {

    const {
        body: {
            title,
            body,
            userId
        }
    } = req;

    const request = {
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title,
            body,
            userId
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
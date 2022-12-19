const { handleHttpError } = require('../helpers/handleError');
const insertarLocalizaciones = require('../business/insertarLocalizaciones');
const traerLocalizaciones = async(_req, res, _next) => {
    try {
        const response = await insertarLocalizaciones();
        res.json(response.data);
    } catch (error) {
        handleHttpError(res, 'ERROR_EN _TRAER_API');
    }
};
module.exports = traerLocalizaciones;
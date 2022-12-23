const localizaciones = require('../models/localizaciones');

const create = async(datos) => {
    await localizaciones.create(datos);
};
const buscarLocalizacion = async(name) => {
    try {
        const result = await localizaciones.findOne({
            where: {
                name
            },
            raw: true
        });
        return result;
    } catch (error) {
        handleHttpError(res, 'NO-ENCONTRADO', 404)
    }
};

module.exports = { create, buscarLocalizacion };
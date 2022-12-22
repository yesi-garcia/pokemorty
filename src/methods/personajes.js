const personajes = require('../models/personajes');

const create = async(datos) => {
    await personajes.create(datos);
};
const buscarPersonaje = async(name) => {
    try {
        const result = await personajes.findOne({
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
module.exports = { create, buscarPersonaje };
const depositos = require('../models/depositos');
const create = async(datos) => {
    await depositos.create(datos);
};
const buscarTodosPorPersonaje = async(idPersonaje) => {
    try {
        const result = await depositos.findAll({
            where: {
                id_personaje: idPersonaje
            },
            raw: true
        });
        return result;
    } catch (error) {
        handleHttpError(res, 'NO-ENCONTRADO', 404)
    }
};
module.exports = { create, buscarTodosPorPersonaje };
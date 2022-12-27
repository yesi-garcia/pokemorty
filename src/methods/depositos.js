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
const countTodosPorPersonaje = async(idPersonaje) => {
    const { count, rows } = await depositos.findAndCountAll({
        where: {
            id_personaje: idPersonaje
        },
        offset: 10,
        limit: 2
    });
    return count;
}
const countTodosPorPersonajeYlocalizacion = async(id_personaje, id_localizacion) => {
    const { count, rows } = await depositos.findAndCountAll({
        where: {
            id_personaje,
            id_localizacion
        },
        offset: 10,
        limit: 2
    });
    return count;
}
module.exports = { create, buscarTodosPorPersonaje, countTodosPorPersonaje, countTodosPorPersonajeYlocalizacion };
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
const buscarPorId = async(id) => {
    const resutl = await depositos.findOne({
        where: {
            id,
        },
        raw: true
    });
    return resutl;
};
const countTodosPorPersonajeYlocalizacionDestino = async(id_personaje, id_destino) => {
    const { count, rows } = await depositos.findAndCountAll({
        where: {
            id_personaje,
            id_destino
        },
        offset: 10,
        limit: 2
    });
    return count;
}
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

const updateDepositoDepositado = async(id) => {
    const result = await depositos.update({ depositados: true }, {
        where: {
            id
        }
    });
    return result;
}
module.exports = { create, buscarTodosPorPersonaje, countTodosPorPersonaje, updateDepositoDepositado, buscarPorId, countTodosPorPersonajeYlocalizacionDestino };
const pokemones = require('../models/pokemones');
const create = async(datos) => {
    await pokemones.create(datos);
};
const buscarPokemon = async(name) => {
    try {
        const result = await pokemones.findOne({
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

module.exports = { create, buscarPokemon };
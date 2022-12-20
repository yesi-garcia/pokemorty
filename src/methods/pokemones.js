const pokemones = require('../models/pokemones');
const create = async(datos) => {
    await pokemones.create(datos);
};
module.exports = { create };
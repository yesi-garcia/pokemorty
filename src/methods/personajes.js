const personajes = require('../models/personajes');

const create = async(datos) => {
    await personajes.create(datos);
};
module.exports = { create };
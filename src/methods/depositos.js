const depositos = require('../models/depositos');
const create = async(datos) => {
    await depositos.create(datos);
};
module.exports = { create };
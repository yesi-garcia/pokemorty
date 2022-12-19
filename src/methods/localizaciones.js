const localizaciones = require('../models/localizaciones');

const create = async(datos) => {
    await localizaciones.create(datos);
};
module.exports = { create };
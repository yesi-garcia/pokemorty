const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const personajes = require('./personajes');
const pokemones = require('./pokemones');
const localizaciones = require('./localizaciones');

const depositos = sequelize.define('depositos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

});

depositos.belongsTo(personajes, {
    foreignKey: 'id_personaje'
});
personajes.hasMany(depositos, {
    foreignKey: 'id_personaje'
});

depositos.belongsTo(pokemones, {
    foreignKey: 'id_pokemon'
});
pokemones.hasMany(depositos, {
    foreignKey: 'id_pokemon'
});

depositos.belongsTo(localizaciones, {
    foreignKey: 'id_localizacion'
});
localizaciones.hasMany(depositos, {
    foreignKey: 'id_localizacion'
});
module.exports = depositos;
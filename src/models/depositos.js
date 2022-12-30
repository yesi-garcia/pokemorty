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
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    depositados: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

}, {
    timestamps: true,
    createdAt: "fecha_inicio",
    updatedAt: "fecha_final",
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
    foreignKey: 'id_origen',
});
localizaciones.hasMany(depositos, {
    foreignKey: 'id_origen'
});

depositos.belongsTo(localizaciones, {
    foreignKey: 'id_destino',
});
localizaciones.hasMany(depositos, {
    foreignKey: 'id_destino',
});
module.exports = depositos;
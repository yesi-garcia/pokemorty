const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const personajes = sequelize.define('personaje', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,
})

module.exports = personajes;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const pokemones = sequelize.define('pokemones', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

}, {
    timestamps: true,
})

module.exports = pokemones;
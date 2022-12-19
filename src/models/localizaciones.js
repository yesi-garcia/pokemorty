const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const localizaciones = sequelize.define('localizaciones', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dimension: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true,
})

module.exports = localizaciones;
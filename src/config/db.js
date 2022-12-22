const Sequelize = require('sequelize');

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_HOST
} = process.env;
const sequelize = new Sequelize(
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD, {
        host: POSTGRES_HOST,
        dialect: 'postgres',
        port: '5434',
        "logging": false,
        pool: {
            max: 5,
            min: 0,
            requiere: 30000,
            idle: 10000
        }
    });
sequelize
    .sync()
    .then(() => {
        console.log('se establecio la conexion');
    })
    .catch(err => {
        console.error('nos se pudo conecta la base de datos', err);
    });

module.exports = sequelize;
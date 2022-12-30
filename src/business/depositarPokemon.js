const { updateDepositoDepositado, buscarPorId } = require('../methods/depositos');
const moment = require('moment');

const cambiarEnDepositados = async({ id }) => {
    const fechaActual = moment();
    let id_deposito = parseInt(id);

    const idDepositoResutl = await buscarPorId(id_deposito);

    const fechaIngreso = moment(idDepositoResutl.fecha_inicio, 'MM-DD-YYYY HH:mm:ss')
    let fechaDeposito = idDepositoResutl.fecha_final
    fechaDeposito = moment(fechaActual, 'MM-DD-YYYY HH:mm:ss');
    const resultDias = fechaDeposito.diff(fechaIngreso, 'days');


    if (idDepositoResutl.id_personaje !== 1 && idDepositoResutl.id_personaje !== 2) {
        throw {
            code: 400,
            message: `lo sentimos no tiene permitido depositar pokemones`
        };
    }
    if (idDepositoResutl.depositados === true) {
        throw {
            code: 400,
            message: `El pokemon ya fue depositado`
        };
    }
    if (resultDias >= 2) {
        throw {
            code: 400,
            message: `lo sentimos el tiempo limite para realizar el deposito fue superado`
        };
    }


    return await updateDepositoDepositado(id_deposito)
        .then(result => {
            return 'Pokemon guardado en destino';
        });
}
module.exports = cambiarEnDepositados;
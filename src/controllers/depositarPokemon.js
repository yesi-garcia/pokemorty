const { handleHttpError } = require('../helpers/handleError');
const cambiarEnDepositados = require('../business/depositarPokemon');

const depositarPokemon = async(req, res, _next) => {
    try {
        const {
            params: {
                id
            }
        } = req;
        const response = await cambiarEnDepositados({ id });
        res.json(response);
    } catch (error) {
        handleHttpError(res, error.message, error.code);
    }
}
module.exports = depositarPokemon;
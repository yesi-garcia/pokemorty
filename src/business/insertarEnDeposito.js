const depositos = require('../methods/depositos');
const { buscarLocalizacion } = require('../methods/localizaciones');
const { buscarPersonaje } = require('../methods/personajes');
const { buscarPokemon } = require('../methods/pokemones');
const { buscarTodosPorPersonaje } = require('../methods/depositos');

const insertarEnDeposito = async({ personaje, pokemon, localizacion }) => {
    try {
        const [personajeResult, pokemonResult, localizacionResult] = await Promise.all([
            buscarPersonaje(personaje),
            buscarPokemon(pokemon),
            buscarLocalizacion(localizacion)
        ]);
        const consultarEnDepositoPorIdPersonaje = await buscarTodosPorPersonaje(personajeResult.id);
        const resultIdLocalizacionesPorPersonaje = consultarEnDepositoPorIdPersonaje.map(deposito => deposito.id_localizacion);

        if (personajeResult.name === 'Summer Smith' && localizacionResult.name !== 'Earth (C-137)') {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }
        if (personajeResult.name === 'Summer Smith' && resultIdLocalizacionesPorPersonaje.length > 9) {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }
        if (personajeResult.name === 'Beth Smith' && localizacionResult.name !== 'Earth (C-137)') {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }
        if (personajeResult.name === 'Beth Smith' && resultIdLocalizacionesPorPersonaje.length > 9) {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }
        if (personajeResult.name === 'Jerry Smith' && localizacionResult.name !== 'Earth (C-137)') {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }
        if (personajeResult.name === 'Jerry Smith' && resultIdLocalizacionesPorPersonaje.length > 0) {
            return res.status(400).json({
                msg: 'El personaje solo puede asignar Pokemones a la localizacion Earth (C-137)'
            });
        }


        await depositos.create({ id_personaje: personajeResult.id, id_pokemon: pokemonResult.id, id_localizacion: localizacionResult.id });
    } catch (error) {

    }
    return true
}
module.exports = insertarEnDeposito;
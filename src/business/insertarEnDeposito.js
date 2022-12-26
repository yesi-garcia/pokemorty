const depositos = require('../methods/depositos');
const { buscarLocalizacion } = require('../methods/localizaciones');
const { buscarPersonaje } = require('../methods/personajes');
const { buscarPokemon } = require('../methods/pokemones');
const { countTodosPorPersonaje } = require('../methods/depositos');

const insertarEnDeposito = async({ personaje, pokemon, localizacion }) => {

    const [personajeResult, pokemonResult, localizacionResult] = await Promise.all([
        buscarPersonaje(personaje),
        buscarPokemon(pokemon),
        buscarLocalizacion(localizacion)
    ]);
    const cantidadPokemonesEnDeposito = await countTodosPorPersonaje(personajeResult.id);

    const MAP_PERSONAJES_CANT_POKEMONS = {
        terceros: {
            "Summer Smith": 10,
            "Beth Smith": 10,
            "Jerry Smith": 1,
        }
    };

    if (personaje in MAP_PERSONAJES_CANT_POKEMONS.terceros && localizacionResult.name === 'Earth (C-137)') {
        //buscar ya sea por jerry summer y beth
        if (MAP_PERSONAJES_CANT_POKEMONS.terceros[personajeResult.name] === cantidadPokemonesEnDeposito) {
            throw {
                code: 400,
                message: `${personaje} ya tiene sufucuentes pokemones en ${localizacionResult.name}`
            };
        }
    }

    return await depositos.create({ id_personaje: personajeResult.id, id_pokemon: pokemonResult.id, id_localizacion: localizacionResult.id })
        .then(result => {
            return 'Pokemon guardado en deposito';
        });

}
module.exports = insertarEnDeposito;
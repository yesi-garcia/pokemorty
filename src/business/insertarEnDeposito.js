const { buscarLocalizacion } = require('../methods/localizaciones');
const { buscarPersonaje } = require('../methods/personajes');
const { buscarPokemon } = require('../methods/pokemones');
const { countTodosPorPersonaje, countTodosPorPersonajeYlocalizacion, create } = require('../methods/depositos');

const insertarEnDeposito = async({ personaje, pokemon, localizacion }) => {

    const [
        personajeResult,
        pokemonResult,
        localizacionResult,
        buscar_a_morty,
        buscarLocalizacionCitadela
    ] = await Promise.all(
        [
            buscarPersonaje(personaje),
            buscarPokemon(pokemon),
            buscarLocalizacion(localizacion),
            buscarPersonaje('Morty Smith'),
            buscarLocalizacion('Citadel of Ricks')
        ]
    );
    const cantidadPokemonesEnDeposito = await countTodosPorPersonaje(personajeResult.id);

    const registrosMorty = await countTodosPorPersonajeYlocalizacion(buscar_a_morty.id, buscarLocalizacionCitadela.id);

    const buscarRegistroPorPersonajeYLocalizacion = await countTodosPorPersonajeYlocalizacion(personajeResult.id, buscarLocalizacionCitadela.id);

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
    if (personajeResult.name === 'Rick Sanchez' && localizacionResult.name === 'Citadel of Ricks') {
        if (buscarRegistroPorPersonajeYLocalizacion >= registrosMorty) {
            throw {
                code: 400,
                message: `Rick superas el maximo en citadela`
            };
        }
    }

    return await create({ id_personaje: personajeResult.id, id_pokemon: pokemonResult.id, id_localizacion: localizacionResult.id })
        .then(result => {
            return 'Pokemon guardado en deposito';
        });

}
module.exports = insertarEnDeposito;
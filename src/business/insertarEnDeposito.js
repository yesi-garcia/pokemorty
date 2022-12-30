const { buscarLocalizacion } = require('../methods/localizaciones');
const { buscarPersonaje } = require('../methods/personajes');
const { buscarPokemon } = require('../methods/pokemones');
const { countTodosPorPersonaje, create, countTodosPorPersonajeYlocalizacionDestino } = require('../methods/depositos');

const insertarEnDeposito = async({ nombre, personaje, pokemon, localizacion_origen, localizacion_destino }) => {

    const [
        personajeResult,
        pokemonResult,
        localizacionResultOrigen,
        localizacionResultDestino,
        buscar_a_morty,
        buscarLocalizacionCitadela
    ] = await Promise.all(
        [
            buscarPersonaje(personaje),
            buscarPokemon(pokemon),
            buscarLocalizacion(localizacion_origen),
            buscarLocalizacion(localizacion_destino),
            buscarPersonaje('Morty Smith'),
            buscarLocalizacion('Citadel of Ricks')
        ]
    );
    const cantidadPokemonesEnDeposito = await countTodosPorPersonaje(personajeResult.id);

    const registrosMorty = await countTodosPorPersonajeYlocalizacionDestino(buscar_a_morty.id, buscarLocalizacionCitadela.id);

    const buscarRegistroPorPersonajeYLocalizacionDestino = await countTodosPorPersonajeYlocalizacionDestino(personajeResult.id, buscarLocalizacionCitadela.id);

    const MAP_PERSONAJES_CANT_POKEMONS = {
        terceros: {
            "Summer Smith": 10,
            "Beth Smith": 10,
            "Jerry Smith": 1,
        }
    };

    if (localizacionResultOrigen.name !== 'Earth (C-137)') {
        throw {
            code: 400,
            message: `${personaje} los pokemones solo pueden ser atrapados en Earth (C-137)`
        };
    }
    if (personaje in MAP_PERSONAJES_CANT_POKEMONS.terceros && localizacionResultDestino.name !== 'Earth (C-137)') {
        throw {
            code: 400,
            message: `${personaje} solo pueden ser depositados en Earth (C-137)`
        };
    }

    if (personaje in MAP_PERSONAJES_CANT_POKEMONS.terceros && localizacionResultOrigen.name === 'Earth (C-137)') {
        //buscar ya sea por jerry summer y beth
        if (MAP_PERSONAJES_CANT_POKEMONS.terceros[personajeResult.name] === cantidadPokemonesEnDeposito) {
            throw {
                code: 400,
                message: `${personaje} ya tiene sufucuentes pokemones en ${localizacionResultOrigen.name}`
            };
        }
    }

    if (personajeResult.name === 'Rick Sanchez' && localizacionResultDestino.name === 'Citadel of Ricks') {
        if (buscarRegistroPorPersonajeYLocalizacionDestino >= registrosMorty) {
            throw {
                code: 400,
                message: `Rick superas el maximo en citadela`
            };
        }
    }

    return await create({ nombre, id_personaje: personajeResult.id, id_pokemon: pokemonResult.id, id_origen: localizacionResultOrigen.id, id_destino: localizacionResultDestino.id })
        .then(result => {
            return 'Pokemon guardado en deposito';
        });

}
module.exports = insertarEnDeposito;
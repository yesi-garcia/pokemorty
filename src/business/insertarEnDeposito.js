const depositos = require('../methods/depositos');
const { buscarLocalizacion } = require('../methods/localizaciones');
const { buscarPersonaje } = require('../methods/personajes');
const { buscarPokemon } = require('../methods/pokemones');

const insertarEnDeposito = async({ personaje, pokemon, localizacion }) => {
    try {
        const [personajeResult, pokemonResult, localizacionResult] = await Promise.all([
            buscarPersonaje(personaje),
            buscarPokemon(pokemon),
            buscarLocalizacion(localizacion)
        ]);

        await depositos.create({ id_personaje: personajeResult.id, id_pokemon: pokemonResult.id, id_localizacion: localizacionResult.id });
    } catch (error) {

    }
    return true
}
module.exports = insertarEnDeposito;
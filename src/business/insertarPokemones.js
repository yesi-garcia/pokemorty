const getPokemonesFromApi = require('../business/getPokemonesFromApi');
const { create } = require('../methods/pokemones');
module.exports = async() => {
    try {
        const { results } = await getPokemonesFromApi();
        await results.map(pokemones => {
            const {
                name,
                url
            } = pokemones
            create({
                name,
                url
            });
        });
        return true
    } catch (error) {

    }
};
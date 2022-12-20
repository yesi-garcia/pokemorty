const getPokemonesFromApi = require('../business/getPokemonesFromApi');
const { create } = require('../methods/pokemones');
module.exports = async() => {
    try {
        const { results } = await getPokemonesFromApi();
        await results.map(pokemones => {
            const {
                name,
                url
                //weight,
                //height
            } = pokemones
            create({
                name,
                url
                //weight,
                //height
            });
        });
    } catch (error) {

    }
    return true
};
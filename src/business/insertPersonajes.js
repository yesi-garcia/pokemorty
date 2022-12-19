const getPersonajesFromApi = require('./getPersonajesFromApi');
const { create } = require('../methods/personajes');
module.exports = async() => {
    try {
        const { results } = await getPersonajesFromApi();
        await results.map(personaje => {
            const {
                name,
                status,
                species,
                type,
                gender,
                origin: {
                    name: origin
                },
                image
            } = personaje;
            console.log()
            create({
                name,
                status,
                species,
                type,
                gender,
                origin,
                image
            });
        });
    } catch (error) {

    }
    return true;

};
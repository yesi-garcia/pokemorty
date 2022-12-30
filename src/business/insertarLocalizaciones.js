const getLocalizacionesFromApi = require('../business/getLocalizacionesFromApi');
const { create } = require('../methods/localizaciones');
module.exports = async() => {
    try {
        const { results } = await getLocalizacionesFromApi();
        await results.map(localizaciones => {
            const {
                name,
                type,
                dimension
            } = localizaciones;
            create({
                name,
                type,
                dimension
            });
        });
        return true
    } catch (error) {

    }
};
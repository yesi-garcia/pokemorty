const axios = require('axios');

module.exports = {
    get: async({ url, headers, params }) => {
        const response = await axios.get(url);
        return response
    },
    post: async({ url, headers, data }) => {
        const response = axios.post(url, {...data }, { headers });
        return response
    }
};
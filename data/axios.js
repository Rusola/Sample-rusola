const axios = require('axios');

module.exports = {

    getResponse(url) {
        return axios
            .get(url)
            .then((res) => res.status)
            .catch(err => {
                console.log(err.data);
            });
    },

};
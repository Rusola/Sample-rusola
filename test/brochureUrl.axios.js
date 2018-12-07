const assert = require('chai').assert;
const data = require('../data/rest.data');
const axios = require('../data/axios');


describe('Checking if the brochure url has 200 Status', function () {

    it('Opening of the brochure 2019', function () {
        return axios.getResponse(data.brochureUrl)
            .then(res => {
                assert.equal(res, 200, `the brochure url has ${res} status instead of 200`);
            })
    });
});

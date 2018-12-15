const assert = require('chai').assert;
const fetch = require('node-fetch');

describe(`broken Img test`, function () {
    it('should check the page for broken Imgs', async function () {
        this.timeout(50000);
        browser.url('http://the-internet.herokuapp.com/broken_images');

        // get all the img on the page
        const links = $$('img');
        // make an arr from src strings
        const srcArr = links.map(el => el.getAttribute('src'));
        // sort only not empty links
        const sortArr = srcArr.filter(el => el != null);
        const requestsArr = sortArr.map(el => fetch(el));
        const responsesArr = await Promise.all(requestsArr);
        responsesArr.forEach((el) => {
            assert.isBelow(el.status, 400, `this url ${el.url} is ${el.status} instead of < 400`);
        });
    })
    ;
})
;
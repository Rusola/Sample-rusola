const assert = require('chai').assert;
const fetch = require('node-fetch');

describe('broken link test', function () {
    it('should check the page for broken links', async function () {
        this.timeout(50000);
        browser.url('/');

        // get all the links on the page
        const links = $$('a');
        // make an arr from href strings
        const hrefArr = links.map(el => el.getAttribute('href'));
        // sort only important links
        const sortArr = hrefArr.filter((el) => {
            if (el != null
                && typeof el === 'string'
                && !el.includes('wp')
                && !el.includes('linkedin')) {
                return el.includes('http');
            }
        });

        const requestsArr = sortArr.map(el => fetch(el));
        const responsesArr = await Promise.all(requestsArr);
        responsesArr.forEach((el) => {
            assert.isBelow(el.status, 400, `this url ${el.url} is ${el.status} instead of < 400`);
        });
    })
    ;
})
;




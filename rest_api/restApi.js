const assert = require('chai').assert;
const expect = require('chai').expect;
const data = require('../data/rest.data');
const axios = require('../data/axios');

let id;

describe('POST', () => {
  it('Positive', () => {
    return axios.postBugs()
      .then(res => {
        id = res.bug._id;
        assert.equal(res.message, data.postResMessage);
        assert.equal(res.bug.bug.summary, data.bug.bug.summary);
      })
  });
});

describe('GET BUG', () => {
  it('Positive', () => {
    return axios.getBug(id)
      .then(res => {
        assert.equal(res._id, id);
      })
  });
});

describe('REMOVE BUG', () => {
  it('Positive', () => {
    return axios.removeBug(id)
      .then(res => {
        assert.equal(res.ok, 1);
      })
  });
});
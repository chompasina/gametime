const chai = require('chai');
const assert = chai.assert;

const Overlord = require('../overlord.js');

describe('Overlord', function(){
  context('with default attributes', function(){
    it('should be instantiated', function(){
      let overlord = new Overlord();
      assert.isObject(overlord);
    });
  });
});

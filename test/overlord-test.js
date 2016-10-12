const chai = require('chai');
const assert = chai.assert;

const Overlord = require('../lib/overlord.js');

describe('Overlord', function(){
  context('with default attributes', function(){
    it('should be instantiated', function(){
      let overlord = new Overlord();
      assert.isObject(overlord);
    });
    it('should have an x-coordinate', function(){
      let overlord = new Overlord();
      assert.equal(overlord.x, 0);
    });
    it('should have a y-coordinate', function(){
      let overlord = new Overlord();
      assert.equal(overlord.y, 10);
    });
    it('should have a height', function(){
      let overlord = new Overlord();
      assert.equal(overlord.height, 100);
    });
    it('should have a width', function(){
      let overlord = new Overlord();
      assert.equal(overlord.width, 100);
    });
    it('should have a speed', function(){
      let overlord = new Overlord();
      assert.equal(overlord.speed, 2);
    });
  });
  context('with given attributes', function(){
    it('can accept a new x-coordinate', function(){
      let overlord = new Overlord({x: 300});
      assert.equal(overlord.x, 300);
    });
    it('can accept a new y-coordinate', function(){
      let overlord = new Overlord({y: 26});
      assert.equal(overlord.y, 26);
    });
    it('can accept a new height', function(){
      let overlord = new Overlord({height: 30});
      assert.equal(overlord.height, 30);
    });
    it('can accept a new width', function(){
      let overlord = new Overlord({width: 90});
      assert.equal(overlord.width, 90);
    });
    it('can accept a new speed', function(){
      let overlord = new Overlord({speed: 45});
      assert.equal(overlord.speed, 45);
    });
  });
});

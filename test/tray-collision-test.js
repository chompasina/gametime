const chai = require('chai');
const assert = chai.assert;
const TrayCollision = require('../lib/tray-collision');

describe('TrayCollision', function(){
  context('with default attributes', function(){
    it('should be instantiated', function(){
      let trayCollision = new TrayCollision();
      assert.equal(trayCollision.total, 0);
    });
  });
  context('with given values', function(){
    it('should be instantiated', function(){
      let trayCollision = new TrayCollision("apple");
      assert.equal(trayCollision.tray, "apple");
    });
  });
});

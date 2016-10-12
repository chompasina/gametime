const chai = require('chai');
const assert = chai.assert;
const stub = require('./support/stub');

const World = require('../lib/world');

describe('World', function(){
  context('with default attributes', function(){
    var world = new World();

    it('should be instantiated', function(){
      assert.isObject(world);
    });

    it('should have a width', function(){
      assert.equal(world.width, null);
    });

    it('should have a height', function(){
      assert.equal(world.height, null);
    });

    it('should have a tray', function(){
      assert.isObject(world.tray);
    });

    it('should have an overlord', function(){
      assert.isObject(world.overlord);
    });
  });

  context('with given attributes', function(){
    var world = new World(30, 40);

    it('can accept a width', function(){
      assert.equal(world.width, 30);
    });

    it('can accept a height', function(){
      assert.equal(world.height, 40);
    });
  });

  context('movement', function(){
    it('should move to the left with left arrow keypress', function(){
      let world = new World();
      assert.equal(world.tray.x, 250);
      world.leftArrow();
      assert.isBelow(world.tray.x, 250);
      assert.isAbove(world.tray.x, 0);
    });

    it('should move to the right with right arrow keypress', function(){
      let world= new World();
      assert.equal(world.tray.x, 250);
      world.rightArrow();
      assert.isAbove(world.tray.x, 250);
      assert.isBelow(world.tray.x, 500);
    });

    
  });
});

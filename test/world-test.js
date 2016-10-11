const chai = require('chai');
const assert = chai.assert;

const World = require('../lib/world');

describe('World', function(){
  context('with default attributes', function(){
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

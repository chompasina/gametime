const chai = require('chai');
const assert = chai.assert;
const stub = require('./support/stub');
const JunkFood = require('../lib/junk-food');

describe('junkFood', function(){
  context('with default attributes', function(){
    var junkFood = new JunkFood();

    it('should be instantiated', function(){
      assert.isObject(junkFood);
    });

    it('should have an x-coordinate', function(){
      assert.equal(junkFood.x, 10);
    });

    it('should have an y-coordinate', function(){
      assert.equal(junkFood.y, 100);
    });

    it('should have a height', function(){
      assert.equal(junkFood.height, 40);
    });

    it('should have a width', function(){
      assert.equal(junkFood.width, 40);
    });

    it('should have a speed', function(){
      assert.equal(junkFood.speed, 0.5);
    });
  });


  context('move', function(){
    var junkFood = new JunkFood();

    it('should increment the y-coordinate', function(){
      assert.equal(junkFood.y, 100);
      junkFood.move();
      assert.equal(junkFood.y, 101);
    });
  });
});

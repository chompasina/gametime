const chai = require('chai');
const assert = chai.assert;
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

    it('shoudld not have a score', function(){
      assert.equal(junkFood.score, null);
    });
  });

  context('with given attributes', function(){
    it('can accept a new x-coordinate', function(){
      let junkFood = new JunkFood({x: 50});
      assert.equal(junkFood.x, 50);
    });

    it('can accept a new y-coordinate', function(){
      let junkFood = new JunkFood({y: 50});
      assert.equal(junkFood.y, 50);
    });

    it('can accept a new height', function(){
      let junkFood = new JunkFood({height: 50});
      assert.equal(junkFood.height, 50);
    });

    it('can accept a new width', function(){
      let junkFood = new JunkFood({width: 50});
      assert.equal(junkFood.width, 50);
    });

    it('can accept a new speed', function(){
      let junkFood = new JunkFood({speed: 50});
      assert.equal(junkFood.speed, 50);
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

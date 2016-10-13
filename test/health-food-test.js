const chai = require('chai');
const assert = chai.assert;

const HealthFood = require('../lib/health-food.js');
const World = require('../lib/world.js');

describe('healthFood', function(){
  context('with default attributes', function(){
    var healthFood = new HealthFood();

    it('should be instantiated', function(){
      assert.isObject(healthFood);
    });

    it('should have an x-coordinate', function(){
      assert.equal(healthFood.x, 500);
    });

    it('should have a y-coordinate', function(){
      assert.equal(healthFood.y, 0);
    });

    it('should have a height', function(){
      assert.equal(healthFood.height, 20);
    });

    it('should have a width', function(){
      assert.equal(healthFood.width, 20);
    });

    it('should have a speed', function(){
      assert.equal(healthFood.speed, 0.5);
    });
  });

  context('with given attributes', function(){
    it('can accept a new y-coordinate', function(){
      let healthFood = new HealthFood({y: 50});
      assert.equal(healthFood.y, 50);
    });
  });
  // context('movement', function(){
  //   it('moves down the canvas', function(){
  //     let world = new World(600, 600);
  //     let healthFood = new HealthFood();
  //     assert.equal(healthFood.x, 500);
  //     assert.equal(healthFood.y, 0);
  //     healthFood.fallDown(world);
  //     assert.equal(healthFood.x, 500);
  //     assert.isAbove(healthFood.y, 0);
  //   });
  // });
});

const chai = require('chai');
const assert = chai.assert;
const HealthFood = require('../lib/health-food');

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
      assert.equal(healthFood.height, 40);
    });

    it('should have a width', function(){
      assert.equal(healthFood.width, 40);
    });

    it('should have a speed', function(){
      assert.equal(healthFood.speed, 0.5);
    });

    it('should not have a color', function(){
      assert.equal(healthFood.color, null);
    });
  });

  context('with given attributes', function(){
    it('can accept a new x-coordinate', function(){
      let healthFood = new HealthFood({x: 50});
      assert.equal(healthFood.x, 50);
    });

    it('can accept a new y-coordinate', function(){
      let healthFood = new HealthFood({y: 50});
      assert.equal(healthFood.y, 50);
    });

    it('can accept a new height', function(){
      let healthFood = new HealthFood({height: 50});
      assert.equal(healthFood.height, 50);
    });

    it('can accept a new width', function(){
      let healthFood = new HealthFood({width: 50});
      assert.equal(healthFood.width, 50);
    });

    it('can accept a new speed', function(){
      let healthFood = new HealthFood({speed: 50});
      assert.equal(healthFood.speed, 50);
    });
  });

  context('move', function(){
    var healthFood = new HealthFood();
    it('should move the y coordinate', function(){
      assert.equal(healthFood.y, 0);
      healthFood.move();
      assert.equal(healthFood.y, 0.5);
    });
  });
});

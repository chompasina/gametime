const chai = require('chai');
const assert = chai.assert;
const stub = require('./support/stub');
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
      assert.equal(healthFood.speed, 2);
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

  context('movement', function(){
    it("can fall down", function(){
      let world = new World(600, 600);
      let healthFood = new HealthFood();
      assert.equal(healthFood.y, 0);
      healthFood.fallDown(world);
      assert.isAbove(healthFood.x, 0);
    });
  });
});

describe('draw', function(){
  var context = stub().of("fillRect");
  var healthFood = new HealthFood({context: context});
  healthFood.draw();

  it('should call fillRect on the canvas', function(){
    assert.equal(context.fillRect.calls.length, 1);
  });

  it('should pass in the x, y, width, and height to fillRect', function(){
    assert.equal(context.fillRect.calls[0][0], healthFood.x);
    assert.equal(context.fillRect.calls[0][1], healthFood.y);
    assert.equal(context.fillRect.calls[0][2], healthFood.width);
    assert.equal(context.fillRect.calls[0][3], healthFood.height);
  });

  it('should set the correct fillstyle on draw', function(){
    assert.equal(context.fillStyle, "green");
  });
});

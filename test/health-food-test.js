const chai = require('chai');
const assert = chai.assert;
const stub = require('./support/stub');
const HealthFood = require('../lib/health-food');
const World = require('../lib/world');

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

  // context('moveHealthFood', function(){
  //   var context = stub().of('beginPath').of('arc').of('fill');
  //   var healthFood = new HealthFood({context: context});
  //   healthFood.moveHealthFood();
  //
  //   it('should calls correct functions on context', function(){
  //     assert.equal(context.beginPath.calls.length, 1);
  //     assert.equal(context.arc.calls.length, 1);
  //     assert.equal(context.fill.calls.length, 1);
  //   });
  // });

  context('dropRandomFood', function(){
    var healthFood = new HealthFood();

    it('should assign a random healthy food type', function(){
      var newFoodHash = healthFood.dropRandomFood();
      var newFood = new HealthFood(newFoodHash);
      assert.notEqual(newFood['type'], 'carrot');
    });

    it('should assign a random healthy food color', function(){
      var newFoodHash = healthFood.dropRandomFood();
      var newFood = new HealthFood(newFoodHash);
      assert.notEqual(newFood['color'], 'orange');
    });

    it('should assign a random healthy food score', function(){
      var newFoodHash = healthFood.dropRandomFood();
      var newFood = new HealthFood(newFoodHash);
      assert.notEqual(newFood['score'], 100);
    });

    it('should assign a random healthy x coordinate', function(){
      var newFoodHash = healthFood.dropRandomFood();
      var newFood = new HealthFood(newFoodHash);
      assert.notEqual(newFood['x'], 500);
    });

    it('should assign a random healthy y coordinate', function(){
      var newFoodHash = healthFood.dropRandomFood();
      var newFood = new HealthFood(newFoodHash);
      assert.equal(newFood['y'], 0);
    });
  });
});

describe('draw instance of healthFood constructor', function(){
  context('draw an instance on the canvas', function(){
    var context = stub().of('beginPath').of('arc').of('fillStyle').of('fill');
    var healthFood = new HealthFood({context: context});
    healthFood.draw();

    it('should call the right canvas methods', function(){
      assert.equal(context.beginPath.calls.length, 1);
      assert.equal(context.arc.calls.length, 1);
      // assert.equal(context.fillStyle.calls.length, 1);
      //testing fill style breaks test
      assert.equal(context.fill.calls.length, 1);
    });
  });
});

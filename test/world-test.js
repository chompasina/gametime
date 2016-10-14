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
    var world = new World(30, 40, "apple");

    it('can accept a width', function(){
      assert.equal(world.width, 30);
    });

    it('can accept a height', function(){
      assert.equal(world.height, 40);
    });

    it('can accept a context', function(){
      assert.equal(world.context, "apple");
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

describe('draw canvas', function(){
  var context = stub().of('fillRect').of('clearRect');
  var world = new World(600, 600, context);
  world.drawCanvas();

  it('should call fillRect and clearRect on the canvas', function(){
    assert.equal(context.fillRect.calls.length, 1);
  });

  it('should pass in the width, and height to fillRect', function(){
    assert.equal(context.fillRect.calls[0][2], world.width);
    assert.equal(context.fillRect.calls[0][3], world.height);
  });

  it('should set the correct fillstyle on draw', function(){
    assert.equal(context.fillStyle, "#3D9970");
  });
});

describe('draw', function(){
  var context = stub().of('fillRect').of('beginPath').of('arc').of('fill').of('clearRect');
  var world = new World(600, 600, context);
  world.draw();

  it('should call all of the draw functions', function(){
    assert.equal(context.fillRect.calls.length, 4);
    assert.equal(context.beginPath.calls.length, 1);
    assert.equal(context.arc.calls.length, 0);
    assert.equal(context.clearRect.calls.length, 1);
    assert.equal(context.fill.calls.length, 1);

  });
});

const chai = require('chai');
const assert = chai.assert;

const Tray = require('../lib/tray');

describe('Tray', function(){
  context('with default attributes', function(){
    it('should be instantiated', function(){
      let tray = new Tray();
      assert.isObject(tray);
    });

    it('should have an x coordinate', function(){
      let tray = new Tray();
      assert.equal(tray.x, 250);
    });

    it('should have a y coordinate', function(){
      let tray = new Tray();
      assert.equal(tray.y, 550);
    });

    it('should assign a height', function(){
      let tray = new Tray();
      assert.equal(tray.height, 10);
    });

    it('should assign a width', function(){
      let tray = new Tray();
      assert.equal(tray.width, 100);
    });

    it('should assign a speed', function(){
      let tray = new Tray();
      assert.equal(tray.speed, 10);
    });
  });

  context('with given attributes', function(){
    it('can accept a new x-coordinate', function(){
      let tray = new Tray({x: 300});
      assert.equal(tray.x, 300);
    });

    it('can accept a new y-coordinate', function(){
      let tray = new Tray({y: 600});
      assert.equal(tray.y, 600);
    });

    it('can accept a new height', function(){
      let tray = new Tray({height: 20});
      assert.equal(tray.height, 20);
    });

    it('can accept a new width', function(){
      let tray = new Tray({width: 150});
      assert.equal(tray.width, 150);
    });

    it('can accept a new speed', function(){
      let tray = new Tray({speed: 20});
      assert.equal(tray.speed, 20);
    });
  });

  context('movement', function(){
    it('should have the ability to move left', function(){
      let tray = new Tray();
      assert.isFunction(tray.moveLeft);
    });

    it('should have the ability to move right', function(){
      let tray = new Tray();
      assert.isFunction(tray.moveRight);
    });
  });
});

describe('moveLeft()', function(){
  context('default behavior', function(){
    it('should move to the left', function(){
      let tray = new Tray();
      assert.equal(tray.x, 250);
      tray.moveLeft();
      assert.isBelow(tray.x, 250);
      assert.isAbove(tray.x, 0);
    });

  });
});

describe('moveRight()', function(){
  context('default behavior', function(){
    it('should move to the right', function(){
      let tray = new Tray();
      assert.equal(tray.x, 250);
      tray.moveRight();
      assert.isAbove(tray.x, 250);
      assert.isBelow(tray.x, 500);
    });
  });
});

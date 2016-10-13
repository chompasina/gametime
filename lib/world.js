const Tray = require('../lib/tray');
const Overlord = require('../lib/overlord');
const HealthFood = require('../lib/health-food');

function World(width, height, context){
  this.width    = width;
  this.height   = height;
  this.context  = context;
  this.tray     = new Tray({context: context});
  this.overlord = new Overlord({context: context});
  this.healthFood = new HealthFood({context: context, canvasWidth: width});
}

World.prototype.rightArrow = function() {
  if (this.tray.x <= 500) {
    this.tray.moveRight();
  }
};

World.prototype.leftArrow = function() {
  if (this.tray.x > 0) {
    this.tray.moveLeft();
  }
};

World.prototype.draw = function(){
  this.healthFood.moveHealthFood();
};

module.exports = World;

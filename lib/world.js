const Tray        = require('../lib/tray');
const Overlord    = require('../lib/overlord');
const HealthFood  = require('../lib/health-food');
const JunkFood    = require('../lib/junk-food');
const RandomHealthFood = require('../lib/random-health-food');

function World(width, height, context){
  this.RandomHealthFood = new RandomHealthFood();
  this.width    = width;
  this.height   = height;
  this.context  = context;
  this.tray     = new Tray({context: context});
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

World.prototype.drawCanvas= function(){
  this.context.clearRect(0, 0, this.width, this.height);
  this.context.fillStyle = '#3D9970';
  this.context.fillRect(0, 0, this.width, this.height);
};

World.prototype.draw = function(){
  this.drawCanvas(this);
  this.tray.draw(this);
};


module.exports = World;

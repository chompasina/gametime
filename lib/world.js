const Tray        = require('../lib/tray');
const Overlord    = require('../lib/overlord');
const HealthFood  = require('../lib/health-food');
const JunkFood    = require('../lib/junk-food');
const RandomHealthFood = require('../lib/random-health-food');

function World(width, height, ctx){
  this.RandomHealthFood = new RandomHealthFood();
  this.width    = width;
  this.height   = height;
  this.ctx  = ctx;
  this.tray     = new Tray({ctx: ctx});
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
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.fillStyle = '#3D9970';
  this.ctx.fillRect(0, 0, this.width, this.height);
};

World.prototype.draw = function(){
  this.drawCanvas(this);
  this.tray.draw(this);
};


module.exports = World;

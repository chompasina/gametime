const Tray = require('../lib/tray');
const Overlord = require('../lib/overlord');

function World(width, height){
  this.width    = width;
  this.height   = height;
  this.tray     = new Tray();
  this.overlord = new Overlord();
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

module.exports = World;

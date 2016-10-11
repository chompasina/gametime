const Tray = require('../lib/tray');

function World(width, height){
  this.width = width;
  this.height = height;
  this.tray = new Tray();
}

World.prototype.rightArrow = function() {
  if ((this.tray.x + this.tray.width) < this.width) {
    this.tray.moveRight();
  }
};

World.prototype.leftArrow = function() {
  if (this.tray.x > 0) {
    this.tray.moveLeft();
  }
};

module.exports = World;
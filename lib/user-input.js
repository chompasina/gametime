function UserInput(world){
  this.world = world;
}

UserInput.prototype.rightArrow = function() {
  if (this.world.tray.x <= 500) {
    this.world.tray.moveRight();
  }
};

UserInput.prototype.leftArrow = function() {
  if (this.world.tray.x > 0) {
    this.world.tray.moveLeft();
  }
};

module.exports = UserInput;
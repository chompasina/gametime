const Tray = require('../lib/tray');
const Overlord = require('../lib/overlord');
const HealthFood = require('../lib/health-food');

function World(width, height, context){
  this.width      = width;
  this.height     = height;
  this.context    = context;
  this.tray       = new Tray({context: context});
  this.overlord   = new Overlord({context: context});
  this.healthFood = new HealthFood({context: context});
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
  // this.context.clearRect(0, 0, this.width, this.height);
  this.context.fillStyle = '#3D9970';
  this.context.fillRect(0, 0, this.width, this.height);
};

// function drawTray(){
//   context.fillStyle = '#7FDBFF';
//   context.fillRect(world.tray.x, world.tray.y, world.tray.width, world.tray.height);
//   return this;
// }

function drawOverlord(){
  context.fillStyle = 'orange';
  context.fillRect(world.overlord.x, world.overlord.y, world.overlord.width, world.overlord.height);
  return this;
}

function moveOverlord(){
  return world.overlord.oscillate(world);
}

function drawHealthFood(){
  context.fillStyle = 'green';
  context.fillRect(world.health_food.x, world.health_food.y, world.health_food.width, world.health_food.height);
  return this;
}

function moveHealthFood(){
  return healthFood.fallDown(world);
}

World.prototype.draw = function(){
  this.drawCanvas(this);
  this.tray.drawTray(this);
  drawOverlord();
  moveOverlord();
  drawHealthFood();
  moveHealthFood();
};

module.exports = World;

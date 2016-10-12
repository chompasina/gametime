const Tray = require('../lib/tray');
const Overlord = require('../lib/overlord');
const HealthFood = require('../lib/health-food');

function World(width, height){
  this.width      = width;
  this.height     = height;
  this.tray       = new Tray();
  this.overlord   = new Overlord();
  this.healthFood = new HealthFood();
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

function drawCanvas(){
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = '#3D9970';
  context.fillRect(0, 0, world.width, world.height);
}

function drawTray(){
  context.fillStyle = '#7FDBFF';
  context.fillRect(world.tray.x, world.tray.y, world.tray.width, world.tray.height);
  return this;
}

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
  drawCanvas();
  drawTray();
  drawOverlord();
  moveOverlord();
  drawHealthFood();
  moveHealthFood();
};

module.exports = World;

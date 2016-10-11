const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');

var world = new World(canvas.width, canvas.height);

function Tray(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

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

function renderWorld(){
  drawCanvas();
  drawTray();
}

Tray.prototype.rightArrow = function(){
  if ((this.tray.x + this.tray.width) < this.width) {
    this.tray.moveRight();
  }
};

Tray.prototype.leftArrow = function() {
  if (this.tray.x + this.tray.width > 20) {
    this.tray.moveLeft();
  }
};

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

requestAnimationFrame(function gameLoop(){
  renderWorld();
  // context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
});

renderWorld();
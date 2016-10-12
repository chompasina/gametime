require('../style.css');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');

var world = new World(canvas.width, canvas.height);

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
  return world.health_food.fallDown(world);
}

function renderWorld(){
  drawCanvas();
  drawTray();
  drawOverlord();
  moveOverlord();
  drawHealthFood();
  moveHealthFood();
}

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

requestAnimationFrame(function gameLoop(){
  renderWorld();
  requestAnimationFrame(gameLoop);
});

renderWorld();

require('../style.css');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');

var world = new World(canvas.width, canvas.height, context);

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

function renderWorld(){
  drawCanvas();
  drawTray();
  drawOverlord();
  moveOverlord();
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


var healthFoodRate = 1500;
var healthFoodRateOfDescent = 0.50;
var lastHealthFood = -1;
var healthFoods = [];
var startTime = Date.now();

function dropRandomFood(){
  var h;
  var random = Math.random();
  if(random<0.25) {
    h = {"type": "kale", "color": "green", "score": "17"};
  } else if (random>=0.25 && random < 0.50) {
    h = {"type": "blueberries", "color": "blue", "score": "24"};
  } else if (random >= 0.50 && random < 0.75) {
    h = {"type": "apple", "color": "red", "score": "21"};
  } else {
    h = {"type": "cabbage", "color": "purple", "score": "31"};
  }
  
  var randomHealthFood = {
    type: h,
    color: h['color'],
    x:    Math.random()*(canvas.width - 30)+15,
    y:    0
  };
  healthFoods.push(randomHealthFood);
}

function moveHealthFood(){
  var time = Date.now();
  
  if(time>(lastHealthFood+ healthFoodRate)){
    lastHealthFood = time;
    dropRandomFood();
  }
    
  for(var i = 0; i<healthFoods.length; i++){
    var healthFood = healthFoods[i];
    healthFood.y += healthFoodRateOfDescent;
    context.beginPath();
    context.arc(healthFood.x, healthFood.y,8, 0, Math.PI*2);
    context.closePath();
    context.fillStyle = healthFood.color;
    context.fill();
  }
}

renderWorld();

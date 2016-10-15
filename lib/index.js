require('../style.css');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');

var world = new World(canvas.width, canvas.height, context);
var overlord = new Overlord();
var healthFoods = [];
var junkFoods = [];

requestAnimationFrame(function gameLoop(){
  world.draw();
  drawOverlord();
  drawAllHealthFoods(healthFoods);
  drawAllJunkFoods(junkFoods);
  requestAnimationFrame(gameLoop);
});

window.setInterval(createHealthFood, 500);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

function drawAllJunkFoods(junkFoods){
  for (var i = 0; i < junkFoods.length; i++){
    junkFoodDraw(junkFoods[i]);
    junkFoodMove(junkFoods[i]);
    if(junkFoods[i].y > 599){
      junkFoods.shift();
    }
  }
}

function drawAllHealthFoods(healthFoods){
  for (var i = 0; i < healthFoods.length; i++){
    healthFoodDraw(healthFoods[i]);
    healthFoods[i].move();
    if(healthFoods[i].y > 599){
      healthFoods.shift();
    }
  }
}

function createHealthFood(){
    var randomHealthFoodAttributes = new RandomHealthFood();
    var healthFood = new HealthFood(randomHealthFoodAttributes);
    healthFood.context = context;
    healthFoods.push(healthFood);
}

function healthFoodDraw(healthFood){
  context.beginPath();
  context.arc(healthFood.x, healthFood.y, 8, 0, Math.PI*2);
  context.fillStyle = healthFood.color;
  context.fill();
}

function drawOverlord(){
  context.fillStyle = 'orange';
  context.fillRect(overlord.x, overlord.y, overlord.width, overlord.height);
}

window.setInterval(oscillate, 100, overlord, world);
function oscillate(overlord, world){
  if(overlord.x < 0 || overlord.x > world.width - overlord.width){
    overlord.speed = -overlord.speed;
  }

  overlord.x += overlord.speed;

  if(overlord.x%(Math.floor(Math.random() * 200)) === 0){
    createJunkFood(overlord);
  }
  return this;
}

function createJunkFood(overlord){
    var overlordMouth = Math.floor(overlord.x + (overlord.width/2));
    var randomJunkFoodAttributes = new RandomJunkFood(overlordMouth);
    var junkFood = new JunkFood(randomJunkFoodAttributes);
    junkFood.context = context;
    junkFoods.push(junkFood);
}

function junkFoodDraw(junkFood){
  context.beginPath();
  context.arc(junkFood.x, junkFood.y, 8, 0, Math.PI*2);
  context.fillStyle = junkFood.color;
  context.fill();
}

function junkFoodMove(junkFood){
  if (junkFood.y > 0) {
    junkFood.y += junkFood.speed;
  }
 junkFood.y += junkFood.speed;
}

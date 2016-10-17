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
var total = 0;

var imageObj = new Image();
      imageObj.onload = function() {
        var pattern = context.createPattern(imageObj, 'no-repeat');

        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = pattern;
        context.fill();
      };
      imageObj.src = './images/beet.png';



requestAnimationFrame(function gameLoop(){
  world.draw();
  drawOverlord();
  drawAllHealthFoods(healthFoods);
  drawAllJunkFoods(junkFoods);
  requestAnimationFrame(gameLoop);
});


window.setInterval(createHealthFood, 1500);

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
  context.fillStyle = healthFood.color;
  context.fillRect(healthFood.x, healthFood.y, healthFood.width, healthFood.height);
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
  context.fillStyle = junkFood.color;
  context.fillRect(junkFood.x, junkFood.y, junkFood.width, junkFood.height);
}

function junkFoodMove(junkFood){
  if (junkFood.y > 0) {
    junkFood.y += junkFood.speed;
  }
 junkFood.y += junkFood.speed;
}

function isHealthFoodCollidingWithTray(healthFood, tray){
    return !(
      tray.x > healthFood.x + healthFood.width || 
      tray.x + tray.width < healthFood.x ||
      tray.y > healthFood.y + healthFood.height ||
      tray.y + tray.height < healthFood.y); 
}

function collisionOutcome(healthFoods, tray){
  for (var i = 0; i < healthFoods.length; i++)
  {var healthFood = healthFoods[i];
    if (isHealthFoodCollidingWithTray(healthFood, tray)){
      recordHealthFoodScore(healthFood);
    }
  }
}

function recordHealthFoodScore(healthFood){
  var newScore = +healthFood.score;
  healthFoods.shift(healthFood);
  total += newScore;
  document.getElementById('score-game').innerHTML = "Score: " + total;
}
window.setInterval(collisionOutcome, 200, healthFoods, world.tray);

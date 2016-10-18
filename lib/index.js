require('../style.css');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');
const Gallery = require('./gallery');

var gallery = new Gallery();
var world = new World(canvas.width, canvas.height, ctx);
var overlord = new Overlord();
// var images = gallery.start();
var healthFoods = [];
var junkFoods = [];
var total = 0;
var overlordImage = new Image();

requestAnimationFrame(function gameLoop(){
  world.draw();
  drawOverlord();
  drawFoods(healthFoods);
  updateAllFoods(healthFoods);
  drawFoods(junkFoods);
  updateAllFoods(junkFoods);
  requestAnimationFrame(gameLoop);
});

window.setInterval(oscillate, 100, overlord, world);
window.setInterval(createHealthFood, 1500);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

function drawFoods(foods){
  for (var i = 0; i < foods.length; i++){
    foodDraw(foods[i]);
  }
}

function updateAllFoods(foods){
  for (var i = 0; i < foods.length; i++) {
    foods[i].move();
    if(foods[i].y > 599){
      foods.shift();
    }
  }
}

function createHealthFood(){
  var randomHealthFoodAttributes = new RandomHealthFood();
  var healthFood = new HealthFood(randomHealthFoodAttributes);
  healthFood.ctx = ctx;
  healthFoods.push(healthFood);
}

function foodDraw(food){
  var foodImage = food.type + "Image";
  ctx.drawImage(gallery.images[foodImage], food.x, food.y, food.width, food.height);
}

function drawOverlord(){
  overlordImage.src = require('../images/overlord.png');
  ctx.drawImage(overlordImage, overlord.x, overlord.y, overlord.width, overlord.height);
}

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
  junkFood.ctx = ctx;
  junkFoods.push(junkFood);
}

function collisionOutcome(healthFoods, tray){
  for (var i = 0; i < healthFoods.length; i++){
    var healthFood = healthFoods[i];
    if (isHealthFoodCollidingWithTray(healthFood, tray)){
      recordHealthFoodScore(healthFood);
    }
  }
}

function isHealthFoodCollidingWithTray(healthFood, tray){
  return !(
    tray.x > healthFood.x + healthFood.width ||
    tray.x + tray.width < healthFood.x ||
    tray.y > healthFood.y + healthFood.height ||
    tray.y + tray.height < healthFood.y
  );
}

function recordHealthFoodScore(healthFood){
  var newScore = +healthFood.score;
  healthFoods.shift(healthFood);
  total += newScore;
  document.getElementById('score-game').innerHTML = "Score: " + total;
}

function junkCollisionOutcome(junkFoods, tray){
  for (var i = 0; i < junkFoods.length; i++){
    var junkFood = junkFoods[i];
    if (isJunkFoodCollidingWithTray(junkFood, tray)){
      decreaseScore(junkFood);
    }
  }
}

function isJunkFoodCollidingWithTray(junkFood, tray){
  return !(
    tray.x > junkFood.x + junkFood.width ||
    tray.x + tray.width < junkFood.x ||
    tray.y > junkFood.y + junkFood.height ||
    tray.y + tray.height < junkFood.y
  );
}

function decreaseScore(junkFood){
  var newScore = +junkFood.score;
  junkFoods.shift(junkFood);
  total -= newScore;
  document.getElementById('score-game').innerHTML = "Score: " + total;
}

window.setInterval(junkCollisionOutcome, 200, junkFoods, world.tray);
window.setInterval(collisionOutcome, 200, healthFoods, world.tray);

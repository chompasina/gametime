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
gallery.start();
var healthFoods = [];
var junkFoods = [];
var total = 0;
var overlordImage = new Image();

requestAnimationFrame(function gameLoop(){
  world.draw();
  overlord.draw(overlordImage, ctx);
  drawFoods(healthFoods);
  drawFoods(junkFoods);
  updateAllFoods(healthFoods);
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
  console.log(foodImage);
  ctx.drawImage(gallery.images[foodImage], food.x, food.y, food.width, food.height);
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

window.setInterval(collisionOutcome, 200, healthFoods, world.tray);
window.setInterval(collisionOutcome, 200, junkFoods, world.tray);

function collisionOutcome(foodsArray, tray){
  for (var i = 0; i < foodsArray.length; i++){
    var food = foodsArray[i];
    if (isFoodCollidingWithTray(food, tray)){
      recordFoodScore(foodsArray, food);
    }
  }
}

function isFoodCollidingWithTray(food, tray){
  return !(
    tray.x > food.x + food.width ||
    tray.x + tray.width < food.x ||
    tray.y > food.y + food.height ||
    tray.y + tray.height < food.y
  );
}

function recordFoodScore(foodsArray, food){
  var newScore = +food.score;
  foodsArray.shift(food);
  total += newScore;
  document.getElementById('score-game').innerHTML = "Score: " + total;
}
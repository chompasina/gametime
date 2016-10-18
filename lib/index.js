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
var foodImage = new Image();
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


window.setInterval(createHealthFood, 1500);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

function drawFoods(foods) {
  for (var i = 0; i < foods.length; i++){
    foodDraw(foods[i]);
  }
}

function updateAllFoods(foods) {
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
    healthFood.context = context;
    healthFoods.push(healthFood);
}

function drawOverlord(){
  overlordImage.src = require('../images/overlord.png');
  context.drawImage(overlordImage, overlord.x, overlord.y, overlord.width, overlord.height);
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

function foodDraw(food){
  if (food.type === 'burger'){
    foodImage.src = require('../images/burger.png');
  } else if(food.type === 'hotdog') {
    foodImage.src = require('../images/hotdog.png');
  } else if (food.type === 'cake') {
    foodImage.src = require('../images/cake.png');
  } else if (food.type === 'fried chicken'){
    foodImage.src = require('../images/fried-chicken.png');
  } else if (food.type === 'pizza'){
    foodImage.src = require('../images/pizza.png');
  } else if (food.type === 'beet'){
    foodImage.src = require('../images/beet.png');
  } else if(food.type === 'broccoli') {
    foodImage.src = require('../images/broccoli.png');
  } else if (food.type === 'redPepper') {
    foodImage.src = require('../images/red-pepper.png');
  } else if (food.type === 'redCabbage'){
    foodImage.src = require('../images/red-cabbage.png');
  } else {
    foodImage.src = require('../images/carrot.png');
  }
  context.drawImage(foodImage, food.x, food.y, food.width, food.height);
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

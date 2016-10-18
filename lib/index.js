require('../style.css');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');

var world = new World(canvas.width, canvas.height, ctx);
var overlord = new Overlord();
var healthFoods = [];
var junkFoods = [];
var total = 0;
var healthFoodImage = new Image();
var junkFoodImage = new Image();
var overlordImage = new Image();

requestAnimationFrame(function gameLoop(){
  world.draw();
  overlord.draw(overlordImage, ctx);
  drawAllHealthFoods(healthFoods);
  drawAllJunkFoods(junkFoods);
  requestAnimationFrame(gameLoop);
});

window.setInterval(oscillate, 100, overlord, world);
window.setInterval(createHealthFood, 1500);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

function drawAllJunkFoods(junkFoods){
  for (var i = 0; i < junkFoods.length; i++){
    var junkFood = junkFoods[i];
    junkFoodDraw(junkFoods[i]);
    junkFood.move();
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
  healthFood.ctx = ctx;
  healthFoods.push(healthFood);
}

function healthFoodDraw(healthFood){
  if (healthFood.type === 'beet'){
    healthFoodImage.src = require('../images/beet.png');
  } else if(healthFood.type === 'broccoli') {
    healthFoodImage.src = require('../images/broccoli.png');
  } else if (healthFood.type === 'redPepper') {
    healthFoodImage.src = require('../images/red-pepper.png');
  } else if (healthFood.type === 'redCabbage'){
    healthFoodImage.src = require('../images/red-cabbage.png');
  } else if (healthFood.type === 'artichoke'){
    healthFoodImage.src = require('../images/artichoke.png');
  } else if (healthFood.type === 'banana'){
    healthFoodImage.src = require('../images/banana.png');
  } else if (healthFood.type === 'blueberries'){
    healthFoodImage.src = require('../images/blueberries.png');
  } else if (healthFood.type === 'cherry'){
    healthFoodImage.src = require('../images/cherry.png');
  } else if (healthFood.type === 'cucumber'){
    healthFoodImage.src = require('../images/cucumber.png');
  } else if (healthFood.type === 'eggplant'){
    healthFoodImage.src = require('../images/eggplant.png');
  } else if (healthFood.type === 'grape'){
    healthFoodImage.src = require('../images/grape.png');
  } else if (healthFood.type === 'onion'){
    healthFoodImage.src = require('../images/onion.png');
  } else if (healthFood.type === 'peas'){
    healthFoodImage.src = require('../images/peas.png');
  } else if (healthFood.type === 'strawberry'){
    healthFoodImage.src = require('../images/radish.png');
  } else if (healthFood.type === 'tomato'){
    healthFoodImage.src = require('../images/tomato.png');
  } else if (healthFood.type === 'yellowPepper'){
    healthFoodImage.src = require('../images/yellow_pepper.png');
  } else if (healthFood.type === 'orange'){
    healthFoodImage.src = require('../images/orange.png');
  } else {
    healthFoodImage.src = require('../images/carrot.png');
  }
  ctx.drawImage(healthFoodImage, healthFood.x, healthFood.y, healthFood.width, healthFood.height);
}

// function drawOverlord(){
//   overlordImage.src = require('../images/overlord.png');
//   ctx.drawImage(overlordImage, overlord.x, overlord.y, overlord.width, overlord.height);
// }

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

function junkFoodDraw(junkFood){
  if (junkFood.type === 'burger'){
    junkFoodImage.src = require('../images/burger.png');
  } else if(junkFood.type === 'hotdog') {
    junkFoodImage.src = require('../images/hotdog.png');
  } else if (junkFood.type === 'cake') {
    junkFoodImage.src = require('../images/cake.png');
  } else if (junkFood.type === 'fried chicken'){
    junkFoodImage.src = require('../images/fried-chicken.png');
  } else if (junkFood.type === 'corndog'){
    junkFoodImage.src = require('../images/corndog.png');
  } else if (junkFood.type === 'fried pancakes'){
    junkFoodImage.src = require('../images/pancakes.png');
  } else if (junkFood.type === 'white_bread'){
    junkFoodImage.src = require('../images/white_bread.png');
  } else {
    junkFoodImage.src = require('../images/pizza.png');
  }
  ctx.drawImage(junkFoodImage, junkFood.x, junkFood.y, junkFood.width, junkFood.height);
}

window.setInterval(collisionOutcome, 200, healthFoods, world.tray);

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

window.setInterval(junkCollisionOutcome, 200, junkFoods, world.tray);

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

require('../style.css');
require('jquery');
require('bootstrap-webpack');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Gallery = require('./gallery');

var gallery;
var world;
gallery = new Gallery();
world = new World(canvas.width, canvas.height, ctx);
gallery.start();
canvas.style.display = 'block';
window.setInterval(createHealthFood, 1500);

var healthFoods = [];
var startButton = document.getElementById('start');
var reqAnimFrameID = 0;


startButton.addEventListener('click', function(){
  world.audioOn();
  world.setGameStyling();
  world.makeNewGame();
  masterGameLoop();
  world.userInput();
  world.increaseDifficulty();
});
  
function masterGameLoop(){
  requestAnimationFrame(function gameLoop(){
    world.checkGameEnders();
    beginGame();
  reqAnimFrameID = requestAnimationFrame(gameLoop);
  });
}

function beginGame(){
  world.draw();
  drawFoods(healthFoods);
  drawFoods(world.junkFoods);
  updateAllFoods(healthFoods);
  updateAllFoods(world.junkFoods);
  world.callHealthCollision(healthFoods, reqAnimFrameID);
  world.callJunkCollision(reqAnimFrameID);
}

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
  var foodImage = food.type + 'Image';
  ctx.drawImage(gallery.images[foodImage], food.x, food.y, food.width, food.height);
}
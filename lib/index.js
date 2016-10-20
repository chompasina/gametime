require('../style.css');
require('jquery');
require("bootstrap-webpack");

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');
const Gallery = require('./gallery');
const ScoreBoard = require('./score-board');
const TrayCollision = require('./tray-collision');

var gallery = new Gallery();
var world = new World(canvas.width, canvas.height, ctx);
var overlord = new Overlord();
var healthFoods = [];
var junkFoods = [];
var overlordImage = new Image();
var scoreBoard = "";
var startButton = document.getElementById('start');
var trayCollision = new TrayCollision(world.tray);
var reqAnimFrameID = 0;

startButton.addEventListener('click', function(){
  canvas.style.display = "block";
  startButton.style.display = "none";
  requestAnimationFrame(function gameLoop(){
    world.draw();
    overlord.draw(overlordImage, ctx);
    drawFoods(healthFoods);
    drawFoods(junkFoods);
    updateAllFoods(healthFoods);
    updateAllFoods(junkFoods);
    reqAnimFrameID = requestAnimationFrame(gameLoop);
    setInterval(trayCollision.check, 200, healthFoods, trayCollision);
    setInterval(trayCollision.check, 200, junkFoods, trayCollision);
    setInterval(trayCollision.gameOver, 200, trayCollision, reqAnimFrameID);
  });
  document.addEventListener('keydown', function(event){
    if (event.keyCode === 39) { world.rightArrow();}
    if (event.keyCode === 37) { world.leftArrow();}
  });
  window.setInterval(oscillate, 100, overlord, world);
  window.setInterval(createHealthFood, 1500);
});


document.addEventListener("DOMContentLoaded", function(){
  var list = document.getElementById('high-scores');
  scoreBoard = new ScoreBoard(list);
  scoreBoard.loadStoredScores();
});

gallery.start();

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

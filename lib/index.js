require('../style.css');
require('jquery');
require('bootstrap-webpack');

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

var gallery;
var world;
var overlord;
var overlordImage;
var trayCollision;

function makeNewGame(){
  gallery = new Gallery();
  world = new World(canvas.width, canvas.height, ctx);
  overlord = new Overlord();
  overlordImage = new Image();
  trayCollision = new TrayCollision(world.tray);
}

var healthFoods = [];
var junkFoods = [];
var scoreBoard = '';
var startButton = document.getElementById('start');
var reqAnimFrameID = 0;

function toggleStartScreen(){
  canvas.style.display = 'none';
  startButton.style.display = 'block';  
}

var gameRunning = false;

startButton.addEventListener('click', function(){
  makeNewGame();
  gallery.start();
  gameRunning = true;
  canvas.style.display = 'block';
  startButton.style.display = 'none';
  requestAnimationFrame(function gameLoop(){
    if(trayCollision.total < 0 && gameRunning || trayCollision.total >= 600 && gameRunning || !gameRunning){
      if(trayCollision.total >= 600){
        alert("You won! Your score was " + trayCollision.total + " points.");
      }
      console.log(trayCollision.total);
      for (var i = 0; i < 1000; i++) {
        window.clearInterval(i);
      }
      healthFoods = [];
      junkFoods = [];
      trayCollision.total = 0;
      document.getElementById('score-game').innerHTML = "Score: " + trayCollision.total;
      toggleStartScreen();
      return gameRunning = false;
    }
    world.draw();
    overlord.draw(overlordImage, ctx);
    drawFoods(healthFoods);
    drawFoods(junkFoods);
    updateAllFoods(healthFoods);
    updateAllFoods(junkFoods);
    trayCollision.check(healthFoods, trayCollision, reqAnimFrameID);
    trayCollision.check(junkFoods, trayCollision, reqAnimFrameID);
    document.getElementById('score-game').innerHTML = "Score: " + trayCollision.total;
    reqAnimFrameID = requestAnimationFrame(gameLoop);
    // trayCollision.gameOver(trayCollision, reqAnimFrameID);
    // setInterval(trayCollision.check, 200, healthFoods, trayCollision, reqAnimFrameID);
    // setInterval(trayCollision.check, 200, junkFoods, trayCollision, reqAnimFrameID);
    // setInterval(trayCollision.gameOver, 200, trayCollision, reqAnimFrameID);
  });
  document.addEventListener('keydown', function(event){
    if (event.keyCode === 39) { world.rightArrow();}
    if (event.keyCode === 37) { world.leftArrow();}
  });
  window.setInterval(createHealthFood, 1500);
  increaseDifficulty(overlord, world);
});

function increaseDifficulty(overlord, world){
  var junkFoodFrequency = window.setInterval(oscillate, 200, overlord, world);
  if (trayCollision.total >= 200 && trayCollision.total < 400){
    clearInterval(junkFoodFrequency);
    junkFoodFrequency = window.setInterval(oscillate, 100, overlord, world);
  } else if (trayCollision.total >= 400 && trayCollision.total < 600){
    clearInterval(junkFoodFrequency);
    junkFoodFrequency = window.setInterval(oscillate, 10, overlord, world);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var list = document.getElementById('high-scores');
  scoreBoard = new ScoreBoard(list);
  scoreBoard.loadStoredScores();
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
  var foodImage = food.type + 'Image';
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
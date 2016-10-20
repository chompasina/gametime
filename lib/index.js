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
  gallery.start();
  gameRunning = true;
  canvas.style.display = 'block';
  startButton.style.display = 'none';
}

var healthFoods = [];
var junkFoods = [];
var scoreBoard = '';
var startButton = document.getElementById('start');
var reqAnimFrameID = 0;
var gameRunning = false;

document.addEventListener('DOMContentLoaded', function(){
  var list = document.getElementById('high-scores');
  scoreBoard = new ScoreBoard(list);
  scoreBoard.loadStoredScores();
});

function toggleStartScreen(){
  canvas.style.display = 'none';
  startButton.style.display = 'block';
}

startButton.addEventListener('click', function(){
  document.getElementById('instructions').style = "display: none";
  makeNewGame();
  requestAnimationFrame(function gameLoop(){
    if(trayCollision.total < 0 && gameRunning || trayCollision.total >= 600 && gameRunning || !gameRunning){
      endGame();
    }
    beginGame();
    checkLevel();
    reqAnimFrameID = requestAnimationFrame(gameLoop);
  });
  document.addEventListener('keydown', function(event){
    if (event.keyCode === 39) { world.rightArrow();}
    if (event.keyCode === 37) { world.leftArrow();}
  });
  window.setInterval(createHealthFood, 1500);
  increaseDifficulty(overlord, world);
});

function increaseDifficulty(overlord, world){
  var interval = 500;
  function oscillate(overlord, world){
    interval = interval - 2;
    if(overlord.x < 0 || overlord.x > world.width - overlord.width){
      overlord.speed = -overlord.speed;
    }
    overlord.x += overlord.speed;

    if(overlord.x%(Math.floor(Math.random() * 100)) === 0){
      createJunkFood(overlord);
    }
    if (interval >= 50){
      window.setTimeout(oscillate, interval, overlord, world);
    } else if (interval < 75){
      window.setTimeout(oscillate, 75, overlord, world);
    }
  }
  oscillate(overlord, world);
}

function checkLevel(){
  var level = document.getElementById('level'); 
  if(trayCollision.total >= 200 && trayCollision.total < 400 ){
    level.innerHTML = "<h3>Level 2</h3>";
  } else if (trayCollision.total >= 400 && trayCollision.total < 600 ){
    level.innerHTML = "<h3>Level 3</h3>";
  }
}

function endGame(){
  if(trayCollision.total >= 600){
    addScore(trayCollision.total);
    alert("You won! Your score was " + trayCollision.total + " points.");
  } else if (trayCollision.total < 0){
    alert("You lost! Eat more vegetables next time to defeat the Empty Calorie Overlord.");
  }
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

function addScore(winningScore){
  if(scoreBoard.scores[0] && trayCollision.total > Math.min.apply(Math, scoreBoard.scores)){
    scoreBoard.addHighScoreToPage(winningScore);
  } else {
    scoreBoard.addHighScoreToPage(winningScore);
  }
}

function beginGame(){
  world.draw();
  overlord.draw(overlordImage, ctx);
  drawFoods(healthFoods);
  drawFoods(junkFoods);
  updateAllFoods(healthFoods);
  updateAllFoods(junkFoods);
  trayCollision.check(healthFoods, trayCollision, reqAnimFrameID);
  trayCollision.check(junkFoods, trayCollision, reqAnimFrameID);
  document.getElementById('score-game').innerHTML = "Score: " + trayCollision.total;
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

function createJunkFood(overlord){
  var overlordMouth = Math.floor(overlord.x + (overlord.width/2));
  var randomJunkFoodAttributes = new RandomJunkFood(overlordMouth);
  var junkFood = new JunkFood(randomJunkFoodAttributes);
  junkFood.ctx = ctx;
  junkFoods.push(junkFood);
}

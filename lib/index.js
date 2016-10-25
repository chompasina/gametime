require('../style.css');
require('jquery');
require('bootstrap-webpack');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
// const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');
// const Gallery = require('./gallery');
// const ScoreBoard = require('./score-board');
// const TrayCollision = require('./tray-collision');

var gallery;
var world;
var overlord;
var overlordImage;
var trayCollision;
// can add new game stuff into world or a renamed world (as game.js)
// function makeNewGame(){
  // gallery = new Gallery();
  world = new World(canvas.width, canvas.height, ctx);
  // overlord = new Overlord();
  // overlordImage = new Image();
  // trayCollision = new TrayCollision(world.tray);
  // gallery.start();
  // gameRunning = true;
  canvas.style.display = 'block';
  // startButton.style.display = 'none';
  window.setInterval(createHealthFood, 1500);
  // startScores();
// }

var healthFoods = [];
var junkFoods = [];
// var scoreBoard = '';
var startButton = document.getElementById('start');
var reqAnimFrameID = 0;
// var gameRunning = false;


//game loop- can be stripped but mostly stay in index. Take out what we can to modules.
startButton.addEventListener('click', function(){
  world.audioOn();
  world.setGameStyling();
  world.makeNewGame();
  masterGameLoop();
  world.userInput();
  increaseDifficulty(overlord, world);
});
  
// function userInput(){
//   document.addEventListener('keydown', function(event){
//     if (event.keyCode === 39) { world.rightArrow();}
//     if (event.keyCode === 37) { world.leftArrow();}
//   });
// }  
function masterGameLoop(){
  requestAnimationFrame(function gameLoop(){
    checkGameEnders();
    beginGame();
    trayCollision.checkLevel();
  reqAnimFrameID = requestAnimationFrame(gameLoop);
  });
}
  //pull this into a function
  
// function audioOn(){
//   var gameAudio = document.createElement("audio");
//   gameAudio.src = "Get_Outside.mp3";
//   gameAudio.play();
//   gameAudio.pause();
// }

// function startScores(){
//   document.addEventListener('DOMContentLoaded', function(){
//     var list = document.getElementById('high-scores');
//     scoreBoard = new ScoreBoard(list);
//     scoreBoard.loadStoredScores();
//   });
// }

// function setGameStyling(){
//   document.getElementById('instructions').style = "display: none";
//   document.getElementById('score-title').style = "display: block";
//   document.getElementById('high-scores').style = "display: block";
//   document.getElementById('level').innerHTML = "<h2>Level 1</h2>";
// }

//pull this into a level.js or game.js
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
//pull this into level or game
// function checkLevel(){
//   var level = document.getElementById('level');
//   if(trayCollision.total >= 200 && trayCollision.total < 400 ){
//     level.innerHTML = "<h3>Level 2</h3>";
//   } else if (trayCollision.total >= 400 && trayCollision.total < 600 ){
//     level.innerHTML = "<h3>Level 3</h3>";
//   }
// }
function checkGameEnders(){
  if(trayCollision.total < 0 && gameRunning || trayCollision.total >= 600 && gameRunning || !gameRunning){
    endGame();
  }
}

// //refactor into functions but mostly stay here
function endGame(){
  if(trayCollision.total >= 600){
    addScore(trayCollision.total);
    alert("You won! Your score was " + trayCollision.total + " points.");
    endGameStyling();
  } else if (trayCollision.total < 0){
    alert("You lost! Eat more vegetables next time to defeat the Empty Calorie Overlord.");
    endGameStyling();
  }
  stopGameMovement();
  resetGame();
  document.getElementById('score-game').innerHTML = "Score: " + trayCollision.total;
  return gameRunning = false;
}

function resetGame(){
  healthFoods = [];
  junkFoods = [];
  trayCollision.total = 0;
}

function endGameStyling(){
  document.getElementById('instructions').style = "display: block";
  document.getElementById('start-btn').style = "display: block";
  document.getElementById('score-title').style = "display: none";
  document.getElementById('high-scores').style = "display: none";
  canvas.style.display = 'none';
  startButton.style.display = 'block';
}

function stopGameMovement(){
  for (var i = 0; i < 1000; i++) {
    window.clearInterval(i);
  }
}
//add this to score board
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

//move to master food class
function drawFoods(foods){
  for (var i = 0; i < foods.length; i++){
    foodDraw(foods[i]);
  }
}
//move to food class
function updateAllFoods(foods){
  for (var i = 0; i < foods.length; i++) {
    foods[i].move();
    if(foods[i].y > 599){
      foods.shift();
    }
  }
}
//move to health food
function createHealthFood(){
  var randomHealthFoodAttributes = new RandomHealthFood();
  var healthFood = new HealthFood(randomHealthFoodAttributes);
  healthFood.ctx = ctx;
  healthFoods.push(healthFood);
}
//move to food class
function foodDraw(food){
  var foodImage = food.type + 'Image';
  ctx.drawImage(gallery.images[foodImage], food.x, food.y, food.width, food.height);
}
//move to junk food or overlord depending (probably overlord)
function createJunkFood(overlord){
  var overlordMouth = Math.floor(overlord.x + (overlord.width/2));
  var randomJunkFoodAttributes = new RandomJunkFood(overlordMouth);
  var junkFood = new JunkFood(randomJunkFoodAttributes);
  junkFood.ctx = ctx;
  junkFoods.push(junkFood);
}

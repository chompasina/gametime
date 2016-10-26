require('../style.css');
require('jquery');
require('bootstrap-webpack');

const Tray        = require('../lib/tray');
const Gallery = require('./gallery');
const Overlord = require('./overlord');
const TrayCollision = require('./tray-collision');
const ScoreBoard = require('./score-board');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');

function World(width, height, ctx){
  this.width    = width;
  this.height   = height;
  this.ctx      = ctx;
  this.tray     = new Tray({ctx: ctx});
}

var gallery;
var world;
var overlord;
var overlordImage;
var trayCollision;
var startButton = document.getElementById('start');
var scoreBoard = '';
var gameRunning = false;
var healthFoods = [];
var junkFoods = [];

World.prototype.makeNewGame = function(){
  gallery = new Gallery();
  overlord = new Overlord();
  overlordImage = new Image();
  trayCollision = new TrayCollision(this.tray);
  gallery.start();
  gameRunning = true;
  startButton.style.display = 'none';
  this.startScores();
};

World.prototype.startScores = function(){
  document.addEventListener('DOMContentLoaded', function(){
    var list = document.getElementById('high-scores');
    scoreBoard = new ScoreBoard(list);
    scoreBoard.loadStoredScores();
  });
};

World.prototype.setGameStyling= function(){
  document.getElementById('instructions').style = "display: none";
  document.getElementById('score-title').style = "display: block";
  document.getElementById('high-scores').style = "display: block";
  document.getElementById('level').innerHTML = "<h2>Level 1</h2>";
};

World.prototype.userInput = function(){
  document.addEventListener('keydown', function(event){
    if (event.keyCode === 39) { world.rightArrow();}
    if (event.keyCode === 37) { world.leftArrow();}
  });
};

World.prototype.audioOn = function(){
  var gameAudio = document.createElement("audio");
  gameAudio.src = "Get_Outside.mp3";
  gameAudio.play();
  gameAudio.pause();
};

World.prototype.rightArrow = function() {
  if (this.tray.x <= 500) {
    this.tray.moveRight();
  }
};

World.prototype.leftArrow = function() {
  if (this.tray.x > 0) {
    this.tray.moveLeft();
  }
};

World.prototype.drawCanvas= function(){
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.fillStyle = '#3D9970';
  this.ctx.fillRect(0, 0, this.width, this.height);
};

World.prototype.draw = function(){
  this.drawCanvas(this);
  this.tray.draw(this);
};

function addScore(winningScore){
  if(scoreBoard.scores[0] && trayCollision.total > Math.min.apply(Math, scoreBoard.scores)){
    scoreBoard.addHighScoreToPage(winningScore);
  } else {
    scoreBoard.addHighScoreToPage(winningScore);
  }
}

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
  this.ctx.style.display = 'none';
  // canvas.style.display = 'none';
  startButton.style.display = 'block';
}

function stopGameMovement(){
  for (var i = 0; i < 1000; i++) {
    window.clearInterval(i);
  }
}

World.prototype.increaseDifficulty = function(width){
  var interval = 500;
  function oscillate(width){
    interval = interval - 2;
    if(overlord.x < 0 || overlord.x > width - overlord.width){
      overlord.speed = -overlord.speed;
    }
    overlord.x += overlord.speed;

    if(overlord.x%(Math.floor(Math.random() * 100)) === 0){
      createJunkFood(overlord);
    }
    if (interval >= 50){
      window.setTimeout(oscillate, interval, width);
    } else if (interval < 75){
      window.setTimeout(oscillate, 75, width);
    }
  }
  oscillate(this.width);
};

World.prototype.checkGameEnders = function(){
  if(trayCollision.total < 0 && gameRunning || trayCollision.total >= 600 && gameRunning || !gameRunning){
    endGame();
  }
};

function createJunkFood(overlord){
  var overlordMouth = Math.floor(overlord.x + (overlord.width/2));
  var randomJunkFoodAttributes = new RandomJunkFood(overlordMouth);
  var junkFood = new JunkFood(randomJunkFoodAttributes);
  junkFood.ctx = this.ctx;
  junkFoods.push(junkFood);
}

module.exports = World;

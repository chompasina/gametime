const Tray        = require('../lib/tray');
const Gallery = require('./gallery');
const Overlord = require('./overlord');
const TrayCollision = require('./tray-collision');
const ScoreBoard = require('./score-board');

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


module.exports = World;

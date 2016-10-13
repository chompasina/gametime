require('../style.css');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');

var world = new World(canvas.width, canvas.height, context);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

requestAnimationFrame(function gameLoop(){
  world.draw();
  requestAnimationFrame(gameLoop);
});

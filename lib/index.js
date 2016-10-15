require('../style.css');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const World = require('./world');
const HealthFood = require('./health-food');
const RandomHealthFood = require('./random-health-food');
const Overlord = require('./overlord');
const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food')

var world = new World(canvas.width, canvas.height, context);

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
});

requestAnimationFrame(function gameLoop(){
  world.draw();
  for (var i = 0; i < healthFoods.length; i++){
      healthFoodDraw(healthFoods[i]);
      healthFoods[i].move();
      if(healthFoods[i].y > 599){
        healthFoods.shift();
      }
    }

  requestAnimationFrame(gameLoop);
});

window.setInterval(createHealthFood, 500, context);

var healthFoods = [];

function createHealthFood(context){
    var randomHealthFoodAttributes = new RandomHealthFood();
    var healthFood = new HealthFood(randomHealthFoodAttributes);
    healthFood.context = context;
    healthFoods.push(healthFood);
}

function healthFoodDraw(healthFood){
  context.beginPath();
  context.arc(healthFood.x, healthFood.y, 8, 0, Math.PI*2);
  context.fillStyle = healthFood.color;
  context.fill();
}

function HealthFood(settings = {}) {
  this.x      = settings.x || 500;
  this.y      = settings.y || 0;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.color  = settings.color || 'orange';
  this.type   = settings.type  || 'carrot';
  this.speed  = settings.speed || 0.5;
  this.score  = settings.score || 100;
}

var healthFoodRate = 1500;
var healthFoodRateOfDescent = 0.50;
var lastHealthFood = -1;
var healthFoods = [];
var startTime = Date.now();

function dropRandomFood(){
  var h;
  var random = Math.random();
  if(random<0.25) {
    h = {"type": "kale", "color": "green", "score": "17"};
  } else if (random>=0.25 && random < 0.50) {
    h = {"type": "blueberries", "color": "blue", "score": "24"};
  } else if (random >= 0.50 && random < 0.75) {
    h = {"type": "apple", "color": "red", "score": "21"};
  } else {
    h = {"type": "cabbage", "color": "purple", "score": "31"};
  }
  
  var randomHealthFood = {
    type: h,
    x:    Math.random()*(canvas.width - 30)+15,
    y:    0
  };
  healthFoods.push(randomHealthFood);
}

function moveHealthFood(){
  var time = Date.now();
  
  if(time>(lastHealthFood+ healthFoodRate)){
    lastHealthFood = time;
    dropRandomFood();
  }
    
  for(var i = 0; i<healthFoods.length; i++){
    var healthFood = healthFoods[i];
    healthFood.y += healthFoodRateOfDescent;
    context.beginPath();
    context.arc(healthFood.x, healthFood.y,8, 0, Math.PI*2);
    context.closePath();
    context.fillStyle = healthFood.color;
    context.fill();
  }
}

// 1- need to pass context into health food.
// 2- keep those variables up there
// 3- pull out randomize function and use the constructor instead (might need to create array of objects still)
// 4- 


module.exports = HealthFood;
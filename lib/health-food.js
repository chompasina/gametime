function HealthFood(settings = {}) {
  this.x      = settings.x || 500;
  this.y      = settings.y || 0;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.color  = settings.color || 'orange';
  this.type   = settings.type  || 'carrot';
  this.speed  = settings.speed || 0.5;
  this.score  = settings.score || 100;
  this.context = settings.context;
}

// var healthFoodRate = 1500;
// var healthFoodRateOfDescent = 0.50;
// var lastHealthFood = -1;
// var healthFoods = [];

// HealthFood.prototype.dropRandomFood = function() {
//   var h;
//   var random = Math.random();
//   if(random<0.25) {
//     h = {"type": "kale", "color": "green", "score": "17"};
//   } else if (random>=0.25 && random < 0.50) {
//     h = {"type": "blueberries", "color": "blue", "score": "24"};
//   } else if (random >= 0.50 && random < 0.75) {
//     h = {"type": "apple", "color": "red", "score": "21"};
//   } else {
//     h = {"type": "cabbage", "color": "purple", "score": "31"};
//   }
//   var randomHealthFood = {
//     type:  h['type'],
//     color: h['color'],
//     score: h['score'],
//     x: Math.random()*(600 - 30)+15, y: 0
//   };
//   healthFoods.push(randomHealthFood);
//   return randomHealthFood;
// };
//
// HealthFood.prototype.moveHealthFood = function(){
//   var time = Date.now();
//
//   if(time>(lastHealthFood+ healthFoodRate)){
//     lastHealthFood = time;
//     this.dropRandomFood();
//   }
//
//   for(var i = 0; i<healthFoods.length; i++){
//     var healthFood = healthFoods[i];
//     healthFood.y += healthFoodRateOfDescent;
//     this.context.beginPath();
//     this.context.arc(healthFood.x, healthFood.y,8, 0, Math.PI*2);
//     this.context.closePath();
//     this.context.fillStyle = healthFood.color;
//     this.context.fill();
//   }
//
// };

HealthFood.prototype.draw = function(){
  this.context.beginPath();
  this.context.arc(this.x, this.y,8, 0, Math.PI*2);
  this.context.fillStyle = this.color;
  this.context.fill();
  return this;
};

module.exports = HealthFood;

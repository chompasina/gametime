function JunkFood(settings = {}) {
  this.x      = settings.x;
  this.y      = settings.y;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.color  = settings.color || 'yellow';
  this.type   = settings.type  || 'cheeto';
  this.speed  = settings.speed || 0.5;
  this.context = settings.context;
  this.overlord = settings.overlord;
}

// JunkFood.prototype.move = function() {
//   if (this.y > 0) {
//     this.y += this.speed;
//   }
//  this.y += this.speed;
// };

// JunkFood.prototype.oscillate = function(world){
//   if(this.x < 0 || this.x > world.width - this.width){
//     this.speed = -this.speed;
//   }
//   this.x += this.speed;
//   return this;
// };

// var junkFoodRate = 1500;
// var junkFoodRateOfDescent = 0.50;
// var lastJunkFood = -1;
// var junkFoods = [];

// var overlord = new Overlord();


// JunkFood.prototype.dropJunkFood = function(){
//
//
//   console.log(overlord.x)
//   var h;
//   var random = Math.random();
//   if(random<0.25) {
//     h = {"type": "pizza", "color": "saddlebrown"};
//   } else if (random>=0.25 && random < 0.50) {
//     h = {"type": "hotdog", "color": "tan"};
//   } else if (random >= 0.50 && random < 0.75) {
//     h = {"type": "snickers", "color": "black"};
//   } else {
//     h = {"type": "fried chicken", "color": "dimgray"};
//   }
//   var randomJunkFood = {
//     type: h['type'],
//     color: h['color'],
//     x:    this.x,
//     y:    this.y
//   };
//   junkFoods.push(randomJunkFood);
//   return randomJunkFood;
// };
//
// JunkFood.prototype.moveJunkFood = function(){
//   var time = Date.now();
//
//   if(time>(lastJunkFood+ junkFoodRate)){
//     lastJunkFood = time;
//     this.dropJunkFood();
//   }
//
//   for(var i = 0; i<junkFoods.length; i++){
//     var junkFood = junkFoods[i];
//     junkFood.y += junkFoodRateOfDescent;
//     this.context.beginPath();
//     this.context.fillRect(junkFood.x, junkFood.y, this.width, this.height);
//     this.context.fillStyle = junkFood.color;
//     this.context.fill();
//   }
// };

module.exports = JunkFood;

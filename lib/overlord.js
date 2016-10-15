const JunkFood = require('./junk-food');
const RandomJunkFood = require('./random-junk-food');

function Overlord(settings = {}) {
  this.x       = settings.x || 0;
  this.y       = settings.y || 10;
  this.height  = settings.height || 100;
  this.width   = settings.width || 100;
  this.speed   = settings.speed || 2;
  this.context = settings.context;
}

var junkFoods = [];

Overlord.prototype.oscillate = function(world){
  if(this.x < 0 || this.x > world.width - this.width){
    this.speed = -this.speed;
  }
  this.x += this.speed;

  this.createJunkFood(context);

  for (var i = 0; i < junkFoods.length; i++){
      junkFoodDraw(junkFoods[i]);
      junkFoodMove(junkFoods[i]);
      // junkFoods[i].move();
      if(junkFoods[i].y > 599){
        junkFoods.shift();
      }
    }

  return this;
};

Overlord.prototype.draw = function(){
  this.context.fillStyle = 'orange';
  this.context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Overlord.prototype.createJunkFood = function(context){
    var randomJunkFoodAttributes = new RandomJunkFood();
    var junkFood = new JunkFood(randomJunkFoodAttributes);
    junkFood.context = context;
    junkFoods.push(junkFood);
};

function junkFoodDraw(junkFood){
  this.context.beginPath();
  this.context.arc(this.x, junkFood.y, 8, 0, Math.PI*2);
  this.context.fillStyle = junkFood.color;
  this.context.fill();
}

function junkFoodMove(junkFood){
  if (this.y > 0) {
    this.y += this.speed;
  }
 this.y += this.speed;
}




module.exports = Overlord;

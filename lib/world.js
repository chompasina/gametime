const Tray        = require('../lib/tray');
const Overlord    = require('../lib/overlord');
const HealthFood  = require('../lib/health-food');
const JunkFood    = require('../lib/junk-food');
const RandomHealthFood = require('../lib/random-health-food');

function World(width, height, context){
  this.RandomHealthFood = new RandomHealthFood();
  this.width    = width;
  this.height   = height;
  this.context  = context;
  this.tray     = new Tray({context: context});
  this.overlord = new Overlord({context: context});
  this.healthFood = new HealthFood({context: context});
  this.junkFood = new JunkFood({context: context, x: this.overlord.x + this.overlord.height, y: this.overlord.y});
}

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
  this.context.clearRect(0, 0, this.width, this.height);
  this.context.fillStyle = '#3D9970';
  this.context.fillRect(0, 0, this.width, this.height);
};

World.prototype.draw = function(){
  this.drawCanvas(this);
  this.tray.draw(this);
  this.overlord.draw();
  this.overlord.oscillate(this);
  this.createHealthFoods();
  // this.healthFood.draw();
  // this.healthFood.createHealthFoodsAttributesArray();
  this.junkFood.moveJunkFood();
  // this.junkFood.oscillate(this);
};

World.prototype.createHealthFoods = function(){
  var time = Date.now();
  var healthFoodRate = 1500;
  var healthFoodRateOfDescent = 0.50;
  var lastHealthFood = -1;
  var healthFoods = [];

  if (time > lastHealthFood + healthFoodRate) {
    lastHealthFood = time;
    var randomHealthFoodAttributes = new RandomHealthFood();
    var healthFood = new HealthFood(randomHealthFoodAttributes);
    healthFood.context = this.context;
    healthFoods.push(healthFood);
  }

  for (var i = 0; i < healthFoods.length; i++) {
    var healthFood1 = healthFoods[i];
    healthFood1.y += healthFoodRateOfDescent;
    return healthFood1;
  }

};

module.exports = World;

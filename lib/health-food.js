function HealthFood(settings = {}) {
  this.x      = settings.x || 500;
  this.y      = settings.y || 0;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.speed  = settings.speed || 2;
}

HealthFood.prototype.fallDown = function(world){
  if(this.y < 0 || this.y > world.width - this.width){
    this.height = -this.speed;
  }
  this.y += this.speed;
  return this;
};

module.exports = HealthFood;

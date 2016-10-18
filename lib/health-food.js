function HealthFood(settings = {}) {
  this.x       = settings.x || 500;
  this.y       = settings.y || 0;
  this.height  = settings.height || 40;
  this.width   = settings.width || 40;
  this.color   = settings.color;
  this.type    = settings.type;
  this.speed   = settings.speed || 0.5;
  this.score   = settings.score || 100;
  this.context = settings.context;
}

HealthFood.prototype.move = function() {
  if (this.y > 0) {
    this.y += this.speed;
  }
 this.y += this.speed;
};

module.exports = HealthFood;

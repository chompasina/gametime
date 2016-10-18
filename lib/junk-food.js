function JunkFood(settings = {}) {
  this.x      = settings.x || 10;
  this.y      = settings.y || 100;
  this.height = settings.height || 40;
  this.width  = settings.width || 40;
  this.color  = settings.color;
  this.type   = settings.type;
  this.speed  = settings.speed || 0.5;
  this.context = settings.context;
  this.overlord = settings.overlord;
}

JunkFood.prototype.move = function() {
  if (this.y > 0) {
    this.y += this.speed;
  }
 this.y += this.speed;
};

module.exports = JunkFood;

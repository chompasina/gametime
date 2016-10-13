function JunkFood(settings = {}) {
  this.x      = settings.x;
  this.y      = settings.y;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.color  = settings.color || 'yellow';
  this.type   = settings.type  || 'cheeto';
  this.speed  = settings.speed || 0.5;
  this.context = settings.context;
}

JunkFood.prototype.draw = function(){
  this.context.fillStyle = 'yellow';
  this.context.fillREct(this.x, this.y, this.width, this.height);
  return this;
}

module.exports = JunkFood;

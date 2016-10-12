function Overlord(settings = {}) {
  this.x      = settings.x || 0;
  this.y      = settings.y || 10;
  this.height = settings.height || 100;
  this.width  = settings.width || 100;
  this.speed  = settings.speed || 2;
}

Overlord.prototype.oscillate = function(world){
  if(this.x < 0 || this.x > world.width - this.width){
    this.speed = -this.speed;
  }
  this.x += this.speed;
  return this;
};

module.exports = Overlord;

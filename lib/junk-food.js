function JunkFood(settings = {}) {
  this.x        = settings.x || 10;
  this.y        = settings.y || 100;
  this.height   = settings.height || 40;
  this.width    = settings.width || 40;
  this.color    = settings.color;
  this.type     = settings.type;
  this.speed    = settings.speed || 0.5;
  this.ctx      = settings.ctx;
  this.overlord = settings.overlord;
  this.score    = settings.score;
}

JunkFood.prototype.move = function() {
  if (this.y > 0) {
    this.y += this.speed;
  }
  this.y += this.speed;
};

module.exports = JunkFood;

function Overlord(settings = {}) {
  this.x      = settings.x || 0;
  this.y      = settings.y || 10;
  this.height = settings.height || 100;
  this.width  = settings.width || 100;
  this.world  = settings.world;
  this.speed  = settings.speed || 10;
}

module.exports = Overlord;

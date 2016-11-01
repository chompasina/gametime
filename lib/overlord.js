function Overlord(settings = {}) {
  this.x       = settings.x || 0;
  this.y       = settings.y || 10;
  this.height  = settings.height || 125;
  this.width   = settings.width || 150;
  this.speed   = settings.speed || 10;
}

Overlord.prototype.draw = function(image, ctx){
  image.src = require('../images/overlord.png');
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
};

module.exports = Overlord;

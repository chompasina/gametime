function Tray(settings = {}){
  this.width = settings.width || 100;
  this.height = settings.height || 10;
  this.x = settings.x || 250;
  this.y = settings.y || 550;
  this.speed = settings.speed || 10;
  this.ctx = settings.ctx;
}

Tray.prototype.moveLeft = function(){
  this.x -= this.speed;
};

Tray.prototype.moveRight = function(){
  this.x += this.speed;
};

Tray.prototype.draw = function(){
  this.ctx.fillStyle = '#7FDBFF';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Tray;

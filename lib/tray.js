function Tray(settings){
  settings = settings || {};
  this.width = settings.width || 100;
  this.height = settings.height || 10;
  this.x = settings.x || 250;
  this.y = settings.y || 550;
  this.world = settings.world;
  this.speed = settings.speed || 10;
}

Tray.prototype.moveLeft = function(){
  console.log("calling move left");
  this.x -= this.speed;
};

Tray.prototype.moveRight = function(){
  console.log("calling move right");
  this.x += this.speed;
};

module.exports = Tray;

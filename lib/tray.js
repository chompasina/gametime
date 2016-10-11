function Tray(settings){
  settings = settings || {};
  this.width = settings.width || 100;
  this.height = settings.height || 10;
  this.x = typeof settings.x === 'undefined';
  this.y = settings.y || 470;
  this.world = settings.world;
  this.speed = 40;
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
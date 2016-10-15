function HealthFood(settings = {}) {
  this.x      = settings.x || 500;
  this.y      = settings.y || 0;
  this.height = settings.height || 20;
  this.width  = settings.width || 20;
  this.color  = settings.color || 'orange';
  this.type   = settings.type  || 'carrot';
  this.speed  = settings.speed || 0.5;
  this.score  = settings.score || 100;
  this.context = settings.context;
}

// HealthFood.prototype.draw = function(){
//   this.context.beginPath();
//   this.context.arc(this.x, this.y,8, 0, Math.PI*2);
//   this.context.fillStyle = this.color;
//   this.context.fill();
//   return this;
// };

HealthFood.prototype.move = function() {
  if (this.y > 0) {
    this.y += this.speed;
  }
 this.y += this.speed;
};

module.exports = HealthFood;

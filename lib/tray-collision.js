function TrayCollision(tray, id) {
  this.tray = tray;
  this.total = 0;
  this.requestAnimID = id;
}

TrayCollision.prototype.check = function(foodsArray, instance){
  for (var i = 0; i < foodsArray.length; i++){
    var food = foodsArray[i];
    if (isFoodCollidingWithTray(food, instance.tray)){
      recordScore(foodsArray, food, instance);
    }
  }
};

function isFoodCollidingWithTray(food, tray){
  return !(
    tray.x > food.x + food.width ||
    tray.x + tray.width < food.x ||
    tray.y > food.y + food.height ||
    tray.y + tray.height < food.y
  );
}

function recordScore(foodsArray, food, instance){
  var newScore = +food.score;
  foodsArray.shift(food);
  instance.total += newScore;
  document.getElementById('score-game').innerHTML = "Score: " + instance.total;
  checkGameOver(instance);
}

function checkGameOver(instance){
  if(instance.total < 0){
    alert("Game over!");
    var canvas = document.getElementById('game');
    canvas.style.display = "none";
    var startButton = document.getElementById('start');
    startButton.style.display = "block";
    window.cancelAnimationFrame(instance.requestAnimID);
    instance.total = 0;
  }
}

module.exports = TrayCollision;

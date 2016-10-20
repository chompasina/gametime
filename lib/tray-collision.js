function TrayCollision(tray) {
  this.tray = tray;
  this.total = 0;
}

TrayCollision.prototype.check = function(foodsArray, instance, reqAnimID){
  for (var i = 0; i < foodsArray.length; i++){
    var food = foodsArray[i];
    if (isFoodCollidingWithTray(food, instance.tray)){
      recordScore(foodsArray, food, instance, reqAnimID);
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
  var totalPointsBar = document.getElementById('total-points');
  var winPointsBar = document.getElementById('win-points');
  var newScore = +food.score;
  foodsArray.shift(food);
  instance.total += newScore;
  totalPointsBar.style = 'width:' + instance.total/6 + '%';
  winPointsBar.style = 'width:' + (600 - instance.total)/6 + '%';
}

module.exports = TrayCollision;

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

TrayCollision.prototype.checkLevel = function(){
  var level = document.getElementById('level');
  if(this.total >= 200 && this.total < 400 ){
    level.innerHTML = "<h3>Level 2</h3>";
  } else if (this.total >= 400 && this.total < 600 ){
    level.innerHTML = "<h3>Level 3</h3>";
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

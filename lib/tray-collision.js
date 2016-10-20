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

var totalPointsBar = document.getElementById('total-points');
var winPointsBar = document.getElementById('win-points');

// var alertedFirst = '';
// var alertedSecond =  '';
// var alertedWon = '';

function isFoodCollidingWithTray(food, tray){
  return !(
    tray.x > food.x + food.width ||
    tray.x + tray.width < food.x ||
    tray.y > food.y + food.height ||
    tray.y + tray.height < food.y
  );
}

function recordScore(foodsArray, food, instance, reqAnimFrameID){
  var newScore = +food.score;
  foodsArray.shift(food);
  instance.total += newScore;
  // document.getElementById('score-game').innerHTML = "Score: " + instance.total;
  totalPointsBar.style = 'width:' + instance.total/6 + '%';
  winPointsBar.style = 'width:' + (600 - instance.total)/6 + '%';
  // checkProgressLevel(instance.total, reqAnimFrameID);
}

// TrayCollision.prototype.gameOver = function(instance, reqAnimFrameID){
//   if(instance.total < 0){
//     alert("Game over!");
//     var canvas = document.getElementById('game');
//     canvas.style.display = "none";
//     var startButton = document.getElementById('start');
//     startButton.style.display = "block";
//     document.getElementById('score-game').innerHTML = " ";
//     instance.total = 0;
//     // window.cancelAnimationFrame(reqAnimFrameID);
//   }
// };
// var canvas = document.getElementById('game');
// var startButton = document.getElementById('start');

// function checkProgressLevel(total, reqAnimFrameID){
//   if(total >= 200 && total < 400 && alertedFirst !== 'yes'){
//     alert('You made it to the next level!');
//     alertedFirst = 'yes';
//   } else if(total >= 400 && total < 600 && alertedSecond !== 'yes'){
//     alert('You made it to the final level!');
//     alertedSecond = 'yes';
//   } else if(total >= 600 && alertedWon !== 'yes'){
//     alert('You win!');
//     alertedWon= 'yes';
//     // window.cancelAnimationFrame(reqAnimFrameID);
//     canvas.style.display = 'none';
//     startButton.style.display = 'block';
//     total = 0;
//   } else if (alertedWon === 'yes'){
//     window.cancelAnimationFrame(reqAnimFrameID);
//     canvas.style.display = 'none';
//     startButton.style.display = 'block';
//     total = 0;
//   }
// }

module.exports = TrayCollision;

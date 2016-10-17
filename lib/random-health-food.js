function RandomHealthFood(){
  var healthFoods = [
    {"type": "broccoli", "color": "green", "score": "9", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/broccoli.png"},
    {"type": "beet", "color": "blue", "score": "8", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/beet.png"},
    {"type": "redPepper", "color": "red", "score": "7", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/red_pepper.png"},
    {"type": "redCabbage", "color": "purple", "score": "24", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/red_cabbage.png"},
    {"type": "carrot", "color": "orange", "score": "2", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/carrot.png"}

  ];
  return healthFoods[Math.floor(Math.random()*healthFoods.length)];
}


module.exports = RandomHealthFood;

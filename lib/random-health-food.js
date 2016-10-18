function RandomHealthFood(){
  var healthFoods = [
    {"type": "broccoli", "color": "green", "score": "9", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "beet", "color": "blue", "score": "8", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "redPepper", "color": "red", "score": "7", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "redCabbage", "color": "purple", "score": "24", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "carrot", "color": "orange", "score": "2", 'x': Math.random()*(600 - 30)+15, 'y': 0}

  ];
  return healthFoods[Math.floor(Math.random()*healthFoods.length)];
}


module.exports = RandomHealthFood;

function RandomHealthFood(){
  var healthFoods = [
    {"type": "kale", "color": "green", "score": "17", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "blueberries", "color": "blue", "score": "24", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "apple", "color": "red", "score": "21", 'x': Math.random()*(600 - 30)+15, 'y': 0},
    {"type": "cabbage", "color": "purple", "score": "31", 'x': Math.random()*(600 - 30)+15, 'y': 0}
  ];
  return healthFoods[Math.floor(Math.random()*healthFoods.length)];
}


module.exports = RandomHealthFood;

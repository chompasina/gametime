function RandomHealthFood(){
  var healthFoods = [
    {"type": "broccoli", "color": "green", "score": "9", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/broccoli.png"},
    {"type": "beet", "color": "blue", "score": "600", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/beet.png"},
    {"type": "redPepper", "color": "red", "score": "600", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/red-pepper.png"},
    {"type": "redCabbage", "color": "purple", "score": "24", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/red-cabbage.png"},
    {"type": "artichoke", "color": "green", "score": "9", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/artichoke.png"},
    {"type": "banana", "color": "yellow", "score": "2", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/banana.png"},
    {"type": "blueberries", "color": "blue", "score": 24, 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/blueberries.png"},
    {"type": "cherry", "color": "red", "score": "600", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/cherry.png"},
    {"type": "cucumber", "color": "green", "score": "2", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/cucumber.png"},
    {"type": "eggplant", "color": "purple", "score": "4", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/eggplant.png"},
    {"type": "grape", "color": "green", "score": "7", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/grape.png"},
    {"type": "onion", "color": "purple", "score": "5", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/onion.png"},
    {"type": "peas", "color": "green", "score": "3", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/peas.png"},
    {"type": "strawberry", "color": "red", "score": "15", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/strawberry.png"},
    {"type": "radish", "color": "red", "score": "200", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/radish.png"},
    {"type": "tomato", "color": "red", "score": "200", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/tomato.png"},
    {"type": "yellowPepper", "color": "red", "score": "10", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/yellow-pepper.png"},
    {"type": "orange", "color": "red", "score": "7", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/orange.png"},
    {"type": "carrot", "color": "orange", "score": "2", 'x': Math.random()*(600 - 30)+15, 'y': 0, 'image': "../images/carrot.png"}
  ];
  return healthFoods[Math.floor(Math.random()*healthFoods.length)];
}


module.exports = RandomHealthFood;

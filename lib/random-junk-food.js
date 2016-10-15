function RandomJunkFood(){
  var junkFoods = [
    {"type": "pizza", "color": "saddlebrown", 'x': 20, 'y': 0},
    {"type": "hotdog", "color": "tan", 'x': 20, 'y': 0},
    {"type": "snickers", "color": "black", 'x': 20, 'y': 0},
    {"type": "fried chicken", "color": "dimgray", 'x': 20, 'y': 0}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

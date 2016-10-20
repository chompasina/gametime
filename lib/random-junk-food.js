function RandomJunkFood(x){
  var junkFoods = [
    {"x": x, "type": "burger", "color": "saddlebrown", "score": "-25"},
    {"x": x, "type": "hotdog", "color": "tan", "score": "-25"},
    {"x": x, "type": "cake", "color": "black", "score": "-15"},
    {"x": x, "type": "friedChicken", "color": "dimgray", "score": "-35"},
    {"x": x, "type": "pizza", "color": "salmon", "score": "-25"},
    {"x": x, "type": "corndog", "color": "tan", "score": "-15"},
    {"x": x, "type": "pancakes", "color": "saddlebrown", "score": "-5"},
    {"x": x, "type": "whiteBread", "color": "gray", "score": "-5"}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

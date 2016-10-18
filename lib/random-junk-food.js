function RandomJunkFood(x){
  var junkFoods = [
    {x: x, "type": "burger", "color": "saddlebrown", "score": "-5"},
    {x: x, "type": "hotdog", "color": "tan", "score": "-5"},
    {x: x, "type": "cake", "color": "black", "score": "-5"},
    {x: x, "type": "friedChicken", "color": "dimgray", "score": "-5"},
    {x: x, "type": "pizza", "color": "salmon", "score": "-5"},
    {x: x, "type": "corndog", "color": "tan", "score": "-5"},
    {x: x, "type": "pancakes", "color": "saddlebrown", "score": "-5"},
    {x: x, "type": "white_bread", "color": "gray", "score": "-5"}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

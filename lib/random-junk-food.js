function RandomJunkFood(x){
  var junkFoods = [
    {x: x, "type": "pizza", "color": "saddlebrown"},
    {x: x, "type": "hotdog", "color": "tan"},
    {x: x, "type": "snickers", "color": "black"},
    {x: x, "type": "fried chicken", "color": "dimgray"}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

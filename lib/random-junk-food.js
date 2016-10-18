function RandomJunkFood(x){
  var junkFoods = [
    {x: x, "type": "burger", "color": "saddlebrown"},
    {x: x, "type": "hotdog", "color": "tan"},
    {x: x, "type": "cake", "color": "black"},
    {x: x, "type": "friedChicken", "color": "dimgray"},
    {x: x, "type": "pizza", "color": "salmon"},
    {x: x, "type": "corndog", "color": "tan"},
    {x: x, "type": "pancakes", "color": "saddlebrown"},
    {x: x, "type": "white_bread", "color": "gray"}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

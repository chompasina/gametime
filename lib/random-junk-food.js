function RandomJunkFood(x){
  var junkFoods = [
    {x: x, "type": "burger", "color": "saddlebrown"},
    {x: x, "type": "hotdog", "color": "tan"},
    {x: x, "type": "cake", "color": "black"},
    {x: x, "type": "friedChicken", "color": "dimgray"},
    {x: x, "type": "pizza", "color": "salmon"}
  ];
  return junkFoods[Math.floor(Math.random()*junkFoods.length)];
}

module.exports = RandomJunkFood;

function Gallery(){
   this.images = {
    "artichokeImage": new Image(),
    "bananaImage": new Image(),
    "beetImage": new Image(),
    "blueberriesImage": new Image(),
    "broccoliImage": new Image(),
    "burgerImage": new Image(),
    "cakeImage": new Image(),
    "carrotImage": new Image(),
    "cherryImage": new Image(),
    "corndogImage": new Image(),
    "cucumberImage": new Image(),
    "eggplantImage": new Image(),
    "friedChickenImage": new Image(),
    "grapeImage": new Image(),
    "hotdogImage": new Image(),
    "onionImage": new Image(),
    "orangeImage": new Image(),
    "pancakesImage": new Image(),
    "peasImage": new Image(),
    "pizzaImage": new Image(),
    "radishImage": new Image(),
    "redCabbageImage": new Image(),
    "redPepperImage": new Image(),
    "strawberryImage": new Image(),
    "tomatoImage": new Image(),
    "whiteBreadImage": new Image(),
    "yellowPepperImage": new Image()
  };
}

Gallery.prototype.start = function(){
  this.images["artichokeImage"].src = "images/artichoke.png";
  this.images["bananaImage"].src = "images/banana.png";
  this.images["beetImage"].src = "images/beet.png";
  this.images["blueberriesImage"].src = "images/blueberries.png";
  this.images["broccoliImage"].src = "images/broccoli.png";
  this.images["burgerImage"].src = "images/burger.png";
  this.images["cakeImage"].src = "images/cake.png";
  this.images["carrotImage"].src = "images/carrot.png";
  this.images["cherryImage"].src = "images/cherry.png";
  this.images["corndogImage"].src = "images/corndog.png";
  this.images["cucumberImage"].src = "images/cucumber.png";
  this.images["eggplantImage"].src = "images/eggplant.png";
  this.images["friedChickenImage"].src = "images/fried-chicken.png";
  this.images["grapeImage"].src = "images/grape.png";
  this.images["hotdogImage"].src = "images/hotdog.png";
  this.images["onionImage"].src = "images/onion.png";
  this.images["orangeImage"].src = "images/orange.png";
  this.images["pancakesImage"].src = "images/pancakes.png";
  this.images["peasImage"].src = "images/peas.png";
  this.images["pizzaImage"].src = "images/pizza.png";
  this.images["radishImage"].src = "images/radish.png";
  this.images["redCabbageImage"].src = "images/red-cabbage.png";
  this.images["redPepperImage"].src = "images/red-pepper.png";
  this.images["strawberryImage"].src = "images/strawberry.png";
  this.images["tomatoImage"].src = "images/tomato.png";
  this.images["whiteBreadImage"].src = "images/white-bread.png";
  this.images["yellowPepperImage"].src = "images/yellow-pepper.png";
  return this.images;
};

module.exports = Gallery;
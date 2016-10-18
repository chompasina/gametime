
function gallery({}){
}

var numImages = 27;
var numLoaded = 0;
var imageURLs = []

function imageLoaded(){
  numLoaded++;
  if (numLoaded === numImages){
    window.init();
  }
}

function loadingImages(){
  for (var i = 0; i < images.length; i++) {
    images[i].onload = imageLoaded();
    }
}


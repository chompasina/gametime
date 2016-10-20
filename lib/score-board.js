var _ = require('lodash');

function ScoreBoard(list){
  this.list = list;
  this.scores = [];
}

ScoreBoard.prototype.loadStoredScores = function(){
  if(this.scores){
    this.scores = localStorage.getItem('scores');
    var storedScores = this.scores.split(",");
    var list = this.list;
    var descendingScores = _.sortBy(storedScores).reverse();
    descendingScores.forEach( function(score){
      var scoreItem = document.createElement('li');
      scoreItem.innerText = score;
      list.appendChild(scoreItem);
  });
  }
};


ScoreBoard.prototype.addHighScoreToPage = function(score){
  var scoreItem = document.createElement('li');
  scoreItem.innerText = score;
  this.list.appendChild(scoreItem);
  this.scores.push(JSON.stringify(score));
  localStorage.setItem("scores", this.scores);
};

module.exports = ScoreBoard;

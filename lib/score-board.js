function ScoreBoard(list){
  this.list = list;
  this.scores = [];
}

ScoreBoard.prototype.loadStoredScores = function(){
  this.scores = localStorage.getItem('scores').split(",");
  var list = this.list;
  var descendingScores = this.scores.reverse();
  descendingScores.forEach( function(score){
    var scoreItem = document.createElement('li');
    scoreItem.innerText = score;
    list.appendChild(scoreItem);
  });
};

ScoreBoard.prototype.addHighScoreToPage = function(score){
  var scoreItem = document.createElement('li');
  scoreItem.innerText = score;
  this.appendChild(scoreItem);
  this.scores.push(score);
  localStorage.setItem("scores", this.scores);
};

module.exports = ScoreBoard;

function ScoreBoard(list){
  this.list = list;
  this.scores = [];
}

ScoreBoard.prototype.loadStoredScores = function(){
    var storedScores = localStorage.getItem('scores').split(",");
    this.scores = storedScores;
    var list = this.list;
    var scores = this.scores;
    var descendingScores = storedScores.sort(function(a, b){return b-a;});
    list.innerHTML = "";
    descendingScores.forEach( function(score){
      var scoreItem = document.createElement('li');
      scoreItem.innerText = score;
      list.appendChild(scoreItem);
      scores.push(score);
  });
};

ScoreBoard.prototype.addHighScoreToPage = function(score){
  var scoreItem = document.createElement('li');
  scoreItem.innerText = score;
  this.list.appendChild(scoreItem);
  this.scores.push(score);
  localStorage.setItem("scores", this.scores);
  this.loadStoredScores();
};

module.exports = ScoreBoard;

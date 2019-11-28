class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGameResults(win, bid) {
    let gameResult = {
      win,
      bid
    }
    this.gameResults.push(gameResult);
  }
  showGameResults(){
    let gameRounds = this.gameResults.length;
    let gameWon = this.gameResults.filter(result => result.win).length;
    let gameLost = gameRounds - gameWon;
    return [gameRounds, gameWon, gameLost]
  }
};

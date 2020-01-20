class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);
    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this));
    this.spanWallet = document.querySelector(".panel span.wallet");
    this.divColor = [...document.querySelectorAll("div.color")];
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score .result");
    this.spanRounds = document.querySelector(".score .number");
    this.spanWin = document.querySelector(".score .win");
    this.spanLoss = document.querySelector(".score .loss");
    this.render();
  }
  render(
    colors = ["gray", "gray", "gray"],
    money = this.wallet.getWalletValue(),
    result = "",
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.divColor.forEach((div, index) => {
      div.style.backgroundColor = colors[index];
    });
    this.spanWallet.textContent = money;
    if (result) {
      result = `Congrats! You WON  $${wonMoney}`;
    } else if (!result && result !== "") {
      result = `Sorry, You LOST  $${bid}`;
    } else {
      result = "Start The Game!";
    }
    this.spanResult.textContent = result;
    this.spanRounds.textContent = stats[0];
    this.spanWin.textContent = stats[1];
    this.spanLoss.textContent = stats[2];

    this.inputBid.value = "";
  }
  startGame() {
    if (this.inputBid.value < 1) return alert("The amount is too low!");
    const bid = Math.floor(this.inputBid.value);
    if (!this.wallet.checkWalletValue(bid)) {
      return alert("Oops! ...you do not have enough money!");
    }

    this.wallet.changeWalletValue(bid, "-");

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkWins(colors);
    const wonMoney = Result.moneyWon(win, bid);
    this.wallet.changeWalletValue(wonMoney);
    this.stats.addGameResults(win, bid);

    this.render(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameResults(),
      bid,
      wonMoney
    );
  }
}

class Wallet {
  constructor(money) {
    let _money = money;
    this.getWalletValue = () => _money;

    this.checkWalletValue = value => {
      if (_money >= value) return true;
      return false;
    };
    this.changeWalletValue = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw alert("Invalid action");
        }
      } else {
        throw alert("Invalid number");
      }
    };
  }
}

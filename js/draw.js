class Draw {
  constructor() {
    this.options = ["#ff4757", "#2ed573", "#1e90ff"];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }
  drawResult() {
    let colors = [];
    for (let i = 0; i < this.options.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      const color = this.options[randomIndex];
      colors.push(color);
    }
    return colors;
  }
}

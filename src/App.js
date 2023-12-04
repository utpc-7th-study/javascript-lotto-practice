import LottoGame from './controller/LottoGame.js';
import InputController from './controller/InputController.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    const money = await InputController.readPurchaseAmount();
    const winningNumbers = await InputController.readWinningLotto();

    this.lottoGame.buyLottos(money);
    this.lottoGame.checkWinning(winningNumbers);
  }
}

export default App;

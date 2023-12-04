import LottoGame from './controller/LottoGame.js';
import InputController from './controller/InputController.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    const money = await InputController.readPurchaseAmount();

    this.lottoGame.buyLottos();
    this.lottoGame.checkWinning();
  }
}

export default App;

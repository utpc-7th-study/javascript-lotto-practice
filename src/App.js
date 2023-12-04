import LottoGame from './controller/LottoGame.js';
import InputController from './controller/InputController.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    const money = await InputController.readPurchaseAmount();
    const winningNumbers = await InputController.readWinningNumbers();
    const bonusNumber = await InputController.readBonusNumber();

    this.lottoGame.buyLottos(money);
    this.lottoGame.checkWinning(winningNumbers, bonusNumber);
  }
}

export default App;

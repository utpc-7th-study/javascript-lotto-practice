import LottoGame from './controller/LottoGame.js';
import InputController from './controller/InputController.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    const money = await InputController.readPurchaseAmount();
    this.lottoGame.buyLottos(money);

    const winningNumbers = await InputController.readWinningNumbers();
    const bonusNumber = await InputController.readBonusNumber();
    this.lottoGame.checkWinning(winningNumbers, bonusNumber);

    this.lottoGame.showResult();
  }
}

export default App;

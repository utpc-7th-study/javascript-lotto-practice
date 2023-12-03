import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoGame from './domain/LottoGame.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    await this.#purchaseLottoProcess();
  }

  async #purchaseLottoProcess() {
    while (true) {
      try {
        const lottoPrice = await InputView.readLottoPrice();
        const lottos = this.#lottoGame.purchaseLotto(lottoPrice);

        OutputView.printLottos(lottos);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

export default App;

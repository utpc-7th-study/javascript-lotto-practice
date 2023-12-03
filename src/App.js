import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoGame from './domain/LottoGame.js';
import { validateWinnerNumbers } from './util/Validation.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    await this.#purchaseLottoProcess();
    const winnerNumbers = await this.#winnerNumbersProcess();
    console.log(winnerNumbers);
  }

  async #purchaseLottoProcess() {
    while (true) {
      try {
        const lottoPrice = await InputView.readLottoPrice();
        const lottos = this.#lottoGame.purchaseLotto(lottoPrice);

        OutputView.printLottoQuantity(lottos.length);
        OutputView.printLottos(lottos);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #winnerNumbersProcess() {
    while (true) {
      try {
        const winnerNumbers = await InputView.readWinnerNumbers();
        validateWinnerNumbers(winnerNumbers);
        return winnerNumbers.split(',').map((number) => Number(number));
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

export default App;

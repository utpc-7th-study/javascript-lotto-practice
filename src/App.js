import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    await this.#purchaseLottoProcess();
  }

  async #purchaseLottoProcess() {
    while (true) {
      try {
        const lottoPrice = await InputView.readLottoPrice();

        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

export default App;

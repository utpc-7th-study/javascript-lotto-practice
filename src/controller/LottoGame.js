import LottoArray from '../domains/LottoArray.js';
import WinningLotto from '../domains/WinningLotto.js';
import LottoResult from '../domains/LottoResult.js';
import RandomNumbersArray from '../domains/RandomNumbersArray.js';

import OutputView from '../views/OutputView.js';

class LottoGame {
  #lottos;
  #lottoResult;

  constructor() {
    this.#lottos = new LottoArray();
    this.#lottoResult = new LottoResult();
  }

  buyLottos(amount) {
    const numbersArray = RandomNumbersArray.create(amount / 1000);
    this.#lottos.set(numbersArray);
    this.#showLottos();
  }

  #showLottos() {
    OutputView.printLottosQuantity(this.#lottos.getTotalQuantity());
    OutputView.printLottos(this.#lottos.get());
  }

  checkWinning(winningNumbers, bonusNumber) {
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    this.#lottoResult.create(this.#lottos, winningLotto);
  }

  showResult() {
    OutputView.printWinningResult(this.#lottoResult.getWinningResult());
    this.#lottoResult.calculateRateOfWinnings(this.#lottos.getTotalQuantity());
  }
}

export default LottoGame;

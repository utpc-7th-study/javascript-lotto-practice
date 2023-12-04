import LottoArray from '../domains/LottoArray.js';
import WinningLotto from '../domains/WinningLotto.js';
import LottoResult from '../domains/LottoResult.js';
import RandomNumbersArray from '../domains/RandomNumbersArray.js';

class LottoGame {
  #lottos;
  #lottoResult;

  constructor() {
    this.#lottos = new LottoArray();
    this.#lottoResult = new LottoResult();
  }

  buyLottos() {
    const amount = 8000;
    const numbersArray = RandomNumbersArray.create(amount / 1000);
    this.#lottos.set(numbersArray);
  }

  checkWinning() {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    this.#lottoResult.create(this.#lottos, winningLotto);
  }

  showResult() {
    this.#lottoResult.calculateTotalWinnings();
    this.#lottoResult.calculateRateOfWinnings(this.#lottos.getTotalQuantity());
  }
}

export default LottoGame;

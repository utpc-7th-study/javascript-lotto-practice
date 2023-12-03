import LottoArray from '../domains/LottoArray.js';
import RandomNumbersArray from '../domains/RandomNumbersArray.js';

class LottoGame {
  #lottos;

  constructor() {
    this.#lottos = new LottoArray();
  }

  buyLottos() {
    const amount = 8000;
    const numbersArray = RandomNumbersArray.create(amount / 1000);
    this.#lottos.set(numbersArray);
  }
}

export default LottoGame;

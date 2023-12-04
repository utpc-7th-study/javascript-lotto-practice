import Lotto from './Lotto.js';

class LottoArray {
  #lottoArray;

  constructor() {
    this.#lottoArray = [];
  }

  set(numbersArray) {
    numbersArray.forEach((numbers) => {
      this.#lottoArray.push(new Lotto(numbers));
    });
  }

  compareTo(winningLotto) {
    const results = this.#lottoArray.map((lotto) => {
      const sameNumbers = winningLotto.checkSameNumber(lotto);
      const bonus = winningLotto.checkBonus(lotto);

      return { sameNumbers, bonus };
    });

    return results;
  }

  getTotalQuantity() {
    return this.#lottoArray.length;
  }

  get() {
    return this.#lottoArray;
  }
}

export default LottoArray;

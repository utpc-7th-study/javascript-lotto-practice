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

  compare(winningLotto) {
    this.#lottoArray.forEach((lotto) => {
      const sameNumbers = winningLotto.checkSameNumber(lotto);
      const bonus = winningLotto.checkBonus(lotto);
    });
  }
}

export default LottoArray;

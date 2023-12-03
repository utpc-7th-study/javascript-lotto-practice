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
}

export default LottoArray;

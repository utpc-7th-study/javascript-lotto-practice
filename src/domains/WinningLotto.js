import Lotto from './Lotto.js';

class WinningLotto {
  #lotto;
  #bonus;

  constructor(numbers, bonusNumber) {
    this.#lotto = new Lotto(numbers);
    this.#bonus = new Bonus(bonusNumber);
  }

  countSameNumber(lotto) {
    lotto.getSameNumber(this.#lotto);
  }
}

export default WinningLotto;

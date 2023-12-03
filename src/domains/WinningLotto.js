import Lotto from './Lotto.js';
import Bonus from './Bonus.js';

class WinningLotto {
  #lotto;
  #bonus;

  constructor(numbers, bonusNumber) {
    this.#lotto = new Lotto(numbers);
    this.#bonus = new Bonus(bonusNumber);
  }

  checkSameNumber(lotto) {
    return lotto.countSameNumber(this.#lotto);
  }

  checkBonus(lotto) {
    return lotto.includes(this.#bonus);
  }
}

export default WinningLotto;

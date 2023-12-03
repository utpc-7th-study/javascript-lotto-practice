import { Random } from '@woowacourse/mission-utils';
import LOTTO_WINNING_INFO from '../constant/lotto/winningInfo.js';
import { MAX, MIN } from '../constant/lotto/range.js';
import LOTTO_PRICE from '../constant/lotto/price.js';

class LottoMachine {
  #lottos = [];

  constructor(buyAmount) {
    for (let i = 0; i < buyAmount / LOTTO_PRICE; i += 1) {
      this.#generateLotto();
    }
  }

  #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN.LOTTO_NUMBER,
      MAX.LOTTO_NUMBER,
      LOTTO_WINNING_INFO.first.correct,
    );

    this.#lottos.push(numbers);
  }
}

export default LottoMachine;

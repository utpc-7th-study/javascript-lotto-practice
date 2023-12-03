import { Random } from '@woowacourse/mission-utils';
import LOTTO_WINNING_INFO from '../constant/lotto/winningInfo.js';
import { MAX, MIN } from '../constant/lotto/range.js';
import LOTTO_PRICE from '../constant/lotto/price.js';
import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';

class LottoMachine {
  #lottos = [];

  constructor(buyAmount) {
    this.#validateBuyAmount(buyAmount);
    this.#generateLotto(buyAmount);
  }

  #validateBuyAmount(buyAmount) {
    if (buyAmount < MIN.BUY_AMOUNT) throw new Error(LOTTO_ERROR_MESSAGE.LESS_THAN_MIN_PRICE);
    if (buyAmount % LOTTO_PRICE !== 0) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_PRICE);
  }

  #generateLotto(buyAmount) {
    for (let i = 0; i < buyAmount / LOTTO_PRICE; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(
        MIN.LOTTO_NUMBER,
        MAX.LOTTO_NUMBER,
        LOTTO_WINNING_INFO.first.correct,
      );

      this.#lottos.push(numbers);
    }
  }
}

export default LottoMachine;

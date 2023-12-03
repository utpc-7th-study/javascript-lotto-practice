import { Random } from '@woowacourse/mission-utils';
import LOTTO_WINNING_INFO from '../constant/lotto/winningInfo.js';
import { MAX, MIN } from '../constant/lotto/range.js';
import LOTTO_PRICE from '../constant/lotto/price.js';
import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';

class LottoMachine {
  #buyAmount = 0;

  #lottos = [];

  #result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifty: 0,
  };

  #roi = 0;

  constructor(buyAmount) {
    this.#validateBuyAmount(buyAmount);
    this.#buyAmount = buyAmount;
  }

  statistics() {
    return {
      ...this.#result,
      roi: this.#roi,
    };
  }

  generateLottos() {
    for (let i = 0; i < this.#buyAmount / LOTTO_PRICE; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(
        MIN.LOTTO_NUMBER,
        MAX.LOTTO_NUMBER,
        LOTTO_WINNING_INFO.first.correct,
      );

      this.#lottos.push(numbers);
    }
  }

  boughtLottos() {
    return this.#lottos;
  }

  checkResult(lotto, lottoBonus) {
    const { first, second, third, fourth, fifty } = LOTTO_WINNING_INFO;
    this.#lottos.forEach((lottoNumbers) => {
      const matchCount = lotto.matchCount(lottoNumbers);
      console.log(matchCount);
      if (matchCount === first.correct) this.#result.first += 1;
      if (matchCount === second.correct && lottoBonus.match(lottoNumbers)) this.#result.second += 1;
      if (matchCount === third.correct && !lottoBonus.match(lottoNumbers)) this.#result.third += 1;
      if (matchCount === fourth.correct) this.#result.fourth += 1;
      if (matchCount === fifty.correct) this.#result.fifty += 1;
    });

    this.#calculateROI();
  }

  #calculateROI() {
    const winningAmount = Object.entries(this.#result).reduce(
      (total, [lottoRank, times]) => total + LOTTO_WINNING_INFO[lottoRank].prize * times,
      0,
    );

    this.#roi = winningAmount / this.#buyAmount;
  }

  #validateBuyAmount(buyAmount) {
    if (buyAmount < MIN.BUY_AMOUNT) throw new Error(LOTTO_ERROR_MESSAGE.LESS_THAN_MIN_PRICE);
    if (buyAmount % LOTTO_PRICE !== 0) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_PRICE);
  }
}

export default LottoMachine;

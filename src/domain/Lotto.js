import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';
import LOTTO_WINNING_INFO from '../constant/lotto/winningInfo.js';
import isValidLottoNumber from '../utils/isValidLottoNumber.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_WINNING_INFO.first.correct) {
      throw new Error(LOTTO_ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }

    if (new Set(numbers).size !== LOTTO_WINNING_INFO.first.correct) {
      throw new Error(LOTTO_ERROR_MESSAGE.HAVE_DUPLICATE);
    }

    numbers.forEach((number) => {
      this.#validateRange(number);
    });
  }

  #validateRange(number) {
    if (!isValidLottoNumber(number)) {
      throw new Error(LOTTO_ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }
}

export default Lotto;

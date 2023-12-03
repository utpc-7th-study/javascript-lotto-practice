import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';
import isValidLottoNumber from '../utils/isValidLottoNumber.js';

class LottoBonus {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  match(numbers) {
    return numbers.includes(this.#bonusNumber);
  }

  #validate(number) {
    if (!isValidLottoNumber(number)) {
      throw new Error(LOTTO_ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }
}

export default LottoBonus;

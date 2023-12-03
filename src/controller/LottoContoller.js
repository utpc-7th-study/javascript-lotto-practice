import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';
import Lotto from '../domain/Lotto.js';
import LottoMachine from '../domain/LottoMachine.js';
import isNumber from '../utils/isNumber.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoContoller {
  #lottoMachine;

  #lotto;

  async askBuyAmount() {
    while (!this.#lottoMachine) {
      try {
        const buyAmountInput = await InputView.enterBuyAmount();
        this.#validateBuyAmount(buyAmountInput);
        const buyAmount = Number(buyAmountInput);
        this.#lottoMachine = new LottoMachine(Number(buyAmount));
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async askLottoNumbers() {
    while (!this.#lotto) {
      try {
        const lottoNumbersInput = await InputView.enterLottoNumbers();
        this.#validateLottoNumbers(lottoNumbersInput);
        const lottoNumbers = this.#inputToArray(lottoNumbersInput);
        this.#lotto = new Lotto(lottoNumbers);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #validateLottoNumbers(lottoNumbersInput) {
    if (!lottoNumbersInput.includes(',')) {
      throw new Error(LOTTO_ERROR_MESSAGE.SPLIT_TO_COMMA);
    }
  }

  #validateBuyAmount(buyAmountInput) {
    if (!isNumber(buyAmountInput)) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_NUMBER);
  }

  #inputToArray(input) {
    return input.split(',').map((number) => number.trim());
  }
}

export default LottoContoller;

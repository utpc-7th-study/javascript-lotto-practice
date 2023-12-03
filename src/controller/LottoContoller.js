import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';
import LOTTO_PRICE from '../constant/lotto/price.js';
import { MIN } from '../constant/lotto/range.js';
import LottoMachine from '../domain/LottoMachine.js';
import isNumber from '../utils/isNumber.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoContoller {
  #lottoMachine;

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

  #validateBuyAmount(buyAmountInput) {
    const buyAmount = Number(buyAmountInput);

    if (!isNumber(buyAmountInput)) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_NUMBER);
    if (buyAmount < MIN.BUY_AMOUNT) throw new Error(LOTTO_ERROR_MESSAGE.LESS_THAN_MIN_PRICE);
    if (buyAmount % LOTTO_PRICE !== 0) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_PRICE);
  }
}

export default LottoContoller;

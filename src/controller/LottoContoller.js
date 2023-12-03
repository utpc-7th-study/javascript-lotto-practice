import LOTTO_ERROR_MESSAGE from '../constant/lotto/errorMessage.js';
import Lotto from '../domain/Lotto.js';
import LottoBonus from '../domain/LottoBonus.js';
import LottoMachine from '../domain/LottoMachine.js';
import isNumber from '../utils/isNumber.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoContoller {
  #lottoMachine;

  #lotto;

  #lottoBonus;

  async askBuyAmount() {
    while (!this.#lottoMachine) {
      try {
        const buyAmountInput = await InputView.enterBuyAmount();
        this.#validateIsNumber(buyAmountInput);
        const buyAmount = Number(buyAmountInput);
        this.#lottoMachine = new LottoMachine(Number(buyAmount));
        
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  generateLottos() {
    this.#lottoMachine.generateLottos();
    OutputView.boughtLottos(this.#lottoMachine.boughtLottos());
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

  async askBonusNumber() {
    while (!this.#lottoBonus) {
      try {
        const lottoBonusInput = await InputView.enterBonusNumber();
        this.#validateIsNumber(lottoBonusInput);
        this.#validateBonusNumber(lottoBonusInput);
        const lottoBonus = Number(lottoBonusInput);
        this.#lottoBonus = new LottoBonus(lottoBonus);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  printStatistics() {
    this.#lottoMachine.checkResult(this.#lotto, this.#lottoBonus);
    const statistics = this.#lottoMachine.statistics();
    OutputView.lottoResult(statistics);
  }

  #validateBonusNumber(lottoBonusInput) {
    if (this.#lotto.includes(lottoBonusInput)) {
      throw new Error(LOTTO_ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
  }

  #validateLottoNumbers(lottoNumbersInput) {
    if (!lottoNumbersInput.includes(',')) {
      throw new Error(LOTTO_ERROR_MESSAGE.SPLIT_TO_COMMA);
    }
  }

  #validateIsNumber(input) {
    if (!isNumber(input)) throw new Error(LOTTO_ERROR_MESSAGE.INVALID_NUMBER);
  }

  #inputToArray(input) {
    return input.split(',').map((number) => number.trim());
  }
}

export default LottoContoller;

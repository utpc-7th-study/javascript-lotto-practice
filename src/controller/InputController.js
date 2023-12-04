import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import hasError from '../utils/hasError.js';
import { validatePurchaseAmount } from '../validator/validator.js';
import Lotto from '../domains/Lotto.js';

const InputController = {
  async readPurchaseAmount() {
    const money = await InputView.readPurchaseAmount();

    if (hasError(validatePurchaseAmount, money)) {
      return await this.readPurchaseAmount();
    }

    return money;
  },

  async readWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();

    try {
      new Lotto(winningNumbers);
    } catch (error) {
      OutputView.print(error.message);
      return await this.readWinningNumbers();
    }

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonus = await InputView.readBonusNumber();

    return bonus;
  },
};

export default InputController;

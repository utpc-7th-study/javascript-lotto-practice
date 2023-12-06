import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import hasError from '../utils/hasError.js';
import { validatePurchaseAmount } from '../validator/validator.js';

import Lotto from '../domains/Lotto.js';
import Bonus from '../domains/Bonus.js';

const InputController = {
  winningNumbers: [],

  async readPurchaseAmount() {
    const money = await InputView.readPurchaseAmount();

    if (hasError(validatePurchaseAmount, money)) {
      return await this.readPurchaseAmount();
    }

    return money;
  },

  async readWinningNumbers() {
    this.winningNumbers = await InputView.readWinningNumbers();

    try {
      new Lotto(this.winningNumbers);
    } catch (error) {
      OutputView.print(error.message);
      return await this.readWinningNumbers();
    }

    return this.winningNumbers;
  },

  async readBonusNumber() {
    const bonus = await InputView.readBonusNumber();

    try {
      new Bonus(bonus, this.winningNumbers);
    } catch (error) {
      OutputView.print(error.message);
      return await this.readBonusNumber();
    }

    return bonus;
  },
};

export default InputController;

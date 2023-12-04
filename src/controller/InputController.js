import InputView from '../views/InputView.js';

const InputController = {
  async readPurchaseAmount() {
    const money = await InputView.readPurchaseAmount();

    return money;
  },
};

export default InputController;

import { PublishedLotto } from '../Lotto.js';
import { PurchaseMoneyUserInputError } from '../errors/UserInputErrors.js';
import paramType from '../lib/paramType/src/paramType.js';
import createRandomNumbers from '../utils/createRandomNumbers.js';

export default class LottoMachine {
  #money;
  #numbersRange = {
    minInclusive: 1,
    maxInclusive: 45,
    length: 6,
  };

  constructor(money, _ = paramType(money, 'string')) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (money < 0) {
      throw new PurchaseMoneyUserInputError(
        '로또 구입 금액은 0보다 작을 수 없습니다.'
      );
    }

    if (!Number.isInteger(money / 1000)) {
      throw new PurchaseMoneyUserInputError(
        '로또 구입 금액은 1000원 단위로 입력해주세요.'
      );
    }
  }

  purchase() {
    const lottoCount = this.#getPurchaseAmount();

    return Array.from({ length: lottoCount }, () => {
      return this.#createLotto();
    });
  }

  #createLotto() {
    const lottoNumbers = createRandomNumbers(this.#numbersRange);
    return new PublishedLotto(lottoNumbers);
  }

  #getPurchaseAmount() {
    return this.#money / 1000;
  }
}

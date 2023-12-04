import { validateLottoNumber } from '../validator/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    validateLottoNumber(numbers);
  }

  #sort(numbers) {
    return numbers.sort(function (a, b) {
      return a - b;
    });
  }

  countSameNumber(lotto) {
    return lotto.countSame(this.#numbers);
  }

  countSame(numbers) {
    const sameNumbers = numbers.filter((number) =>
      this.#numbers.includes(number)
    );

    return sameNumbers.length;
  }

  includes(bonus) {
    return bonus.includedIn(this.#numbers);
  }

  get() {
    return this.#numbers;
  }
}

export default Lotto;

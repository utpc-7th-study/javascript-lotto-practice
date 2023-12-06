import { validateBonus } from '../validator/validator.js';

class Bonus {
  #number;

  constructor(bonus, numbers) {
    this.#validate(bonus, numbers);
    this.#number = bonus;
  }

  #validate(bonus, numbers) {
    this.#validateIncludedIn(numbers, bonus);
    validateBonus(bonus);
  }

  #validateIncludedIn(numbers, bonus) {
    if (numbers.includes(bonus)) {
      throw new Error('[ERROR] 당첨 번호에 포함된 숫자입니다.');
    }
  }

  includedIn(numbers) {
    return numbers.includes(this.#number);
  }
}

export default Bonus;

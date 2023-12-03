import paramType from './lib/paramType/src/paramType.js';
import AppError from './errors/AppError.js';

const SEPERATE_SYMBOL = ',';

class Lotto {
  #numbers;

  constructor(numbers, _ = paramType(numbers, Array)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #validate(numbers, _ = paramType(numbers, Array)) {
    this.#checkLength(numbers);
    this.#checkDuplicate(numbers);
    this.#checkRange(numbers);
  }

  #checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new AppError('로또 번호는 6개여야 합니다.');
    }
  }

  #checkDuplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new AppError('로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  #checkRange(numbers) {
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new AppError('로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export default Lotto;

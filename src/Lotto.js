import paramType from './lib/paramType/src/paramType.js';
import AppError from './errors/AppError.js';
import { WinningNumbersUserInputError } from './errors/UserInputErrors.js';

const SEPERATE_SYMBOL = ',';

export class Lotto {
  constructor(numbers) {
    if (this.constructor === Lotto) {
      throw new Error('Lotto 클래스는 추상 클래스입니다.');
    }
    this.validate(numbers);
    this.numbers = numbers;
  }

  get() {
    return [...this.numbers];
  }

  validate(numbers) {
    try {
      if (typeof numbers === 'string') {
        this._validate(numbers);
        new PublishedLotto(Lotto.convertToLottoFormat(numbers));
        return;
      }
      this.checkLength(numbers);
      this.checkDuplicate(numbers);
      this.checkRange(numbers);
    } catch (error) {
      if (this.constructor === WinningLotto) {
        throw new WinningNumbersUserInputError(error.message);
      } else {
        throw new AppError(error.message);
      }
    }
  }

  static convertToLottoFormat(numbers, _ = paramType(numbers, 'string')) {
    return numbers.split(SEPERATE_SYMBOL).map((number) => Number(number));
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new AppError('로또 번호는 6개여야 합니다.');
    }
  }

  checkDuplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new AppError('로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  checkRange(numbers) {
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new AppError('로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export class PublishedLotto extends Lotto {
  constructor(numbers) {
    super(numbers);
  }
}

export class WinningLotto extends Lotto {
  #numbers;

  constructor(numbers) {
    super(numbers);
    this.numbers = Lotto.convertToLottoFormat(numbers);
  }

  _validate(numbers, _ = paramType(numbers, 'string')) {
    this.checkUserInputFormat(numbers);
    this.checkHasSpacing(numbers);
  }

  checkUserInputFormat(numbers) {
    const formatRegexp = new RegExp(/^\d+(,\d+){5}$/);

    if (!formatRegexp.test(numbers)) {
      throw new WinningNumbersUserInputError(
        '로또 번호는 숫자와 쉼표(,)만 입력 가능합니다.'
      );
    }
  }

  checkHasSpacing(numbers) {
    const spacingRegexp = /\s/;

    if (spacingRegexp.test(numbers)) {
      throw new AppError('로또 번호에 공백이 있습니다.');
    }
  }
}

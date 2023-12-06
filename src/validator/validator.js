const Validator = {
  numberType(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자로 입력해주세요.');
    }
  },

  unit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1,000원 단위로 입력하세요.');
    }
  },

  overThanMinimum(amount) {
    if (amount < 1000) {
      throw new Error('[ERROR] 최소 구매 금액은 1,000원입니다.');
    }
  },

  length(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  },

  duplication(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.');
    }
  },

  rangeIn(numbers) {
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  },

  range(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  },

  numberTypeIn(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
  },
};

export const validatePurchaseAmount = (amount) => {
  Validator.numberType(amount);
  Validator.overThanMinimum(amount);
  Validator.unit(amount);
};

export const validateLottoNumber = (numbers) => {
  Validator.numberTypeIn(numbers);
  Validator.length(numbers);
  Validator.duplication(numbers);
  Validator.rangeIn(numbers);
};

export const validateBonus = (number) => {
  Validator.numberType(number);
  Validator.range(number);
};

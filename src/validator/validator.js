const Validator = {
  unit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1,000원 단위로 입력하세요.');
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
};

export const validatePurchaseAmount = (amount) => {
  Validator.unit(amount);
};

export const validateLottoNumber = (numbers) => {
  Validator.length(numbers);
  Validator.duplication(numbers);
};

export const validateBonus = (number) => {};

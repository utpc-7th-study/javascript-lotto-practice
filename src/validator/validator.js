const Validator = {
  unit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('구매 금액은 1,000원 단위로 입력하세요.');
    }
  },
};

export const validatePurchaseAmount = (amount) => {
  Validator.unit(amount);
};

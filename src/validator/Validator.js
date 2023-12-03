export const Validator = {
  validateAmount(amount) {
    const checkStyle = /\D/;
    if (checkStyle.test(amount)) throw new Error('[ERROR]');
    if (amount % 1000 !== 0) throw new Error('[ERROR]');
    if (typeof amount !== 'number') throw new Error('[ERROR]');
  },

  validatewinningNumber(winningNumber) {
    const isDuplicated = new Set(winningNumber).size !== winningNumber.length;
    const checkStyle = /\D/;

    if (isDuplicated) throw new Error('[ERROR]');
    if (winningNumber.length !== 6) throw new Error('[ERROR]');
    winningNumber.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 당첨 번호는 1~45의 사잇 값이여야 합니다.');
      }
      if (checkStyle.test(number)) throw new Error('[ERROR]');
    });
  },

  validateBonusNumber(winningNumber, bonusNumber) {
    const bonusNumList = String(bonusNumber).split(',');
    const checkStyle = /\D/;

    if (bonusNumber < 1 || bonusNumber > 45) throw new Error('[ERROR]');
    if (bonusNumList.length !== 1) throw new Error('[ERROR]');
    if (checkStyle.test(bonusNumber)) throw new Error('[ERROR]');
    winningNumber.map((number) => {
      if (number === bonusNumber) throw new Error('[ERROR]');
    });
  },
};

export const validateWinnerNumbers = (winnerNumbers) => {
  validateMinimumLengthLimit(winnerNumbers);
};

const validateMinimumLengthLimit = (winnerNumbers) => {
  if (winnerNumbers.split(',').length !== 6) {
    throw new Error('[ERROR] 당첨번호는 쉼표(,)를 기준으로 6자리를 입력해주세요.');
  }
};

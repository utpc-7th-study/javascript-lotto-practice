export const validateWinnerNumbers = (winnerNumbers) => {
  const splitedNumbers = winnerNumbers.split(',');
  validateMinimumLengthLimit(splitedNumbers);
  validateNumberType(splitedNumbers);
};

const validateMinimumLengthLimit = (splitedNumbers) => {
  if (splitedNumbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 쉼표(,)를 기준으로 6자리를 입력해주세요.');
  }
};

const validateNumberType = (splitedNumbers) => {
  const isValid = splitedNumbers.every((number) => /^[0-9]+$/.test(number));

  if (!isValid) {
    throw new Error('[ERROR] 당첨 번호는 쉼표(,)를 기준으로 숫자 형태만 입력해주세요.');
  }
};

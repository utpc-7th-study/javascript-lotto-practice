export const validateWinnerNumbers = (winnerNumbers) => {
  const splitedNumbers = winnerNumbers.split(',');

  validateMinimumLengthLimit(splitedNumbers);

  splitedNumbers.forEach((number) => {
    validateNumberType(number);
    validateNumberRange(number);
  });
};

export const validateBonusNumber = (bonusNumber, winnerNumbers) => {
  validateNumberType(bonusNumber);
  validateNumberRange(bonusNumber);
  validateDuplicateWithWinnerNumbers(winnerNumbers, bonusNumber);
};

const validateMinimumLengthLimit = (splitedNumbers) => {
  if (splitedNumbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 쉼표(,)를 기준으로 6자리를 입력해주세요.');
  }
};

const validateNumberType = (number) => {
  const isValid = /^[0-9]+$/.test(number);

  if (!isValid) {
    throw new Error('[ERROR] 숫자 형태만 입력해주세요.');
  }
};

const validateNumberRange = (number) => {
  const isValid = number >= 1 && number <= 45;

  if (!isValid) {
    throw new Error('[ERROR] 1 ~ 45사이의 숫자만 입력해주세요.');
  }
};

const validateDuplicateWithWinnerNumbers = (winnerNumbers, bonusNumber) => {
  if (new Set([...winnerNumbers, Number(bonusNumber)]).size === winnerNumbers.length) {
    throw new Error('[ERROR] 보너스번호는 당첨번호와 중복될 수 없습니다.');
  }
};

import { validateBonusNumber } from '../src/util/Validation.js';

describe('보너스번호 테스트', () => {
  const MIN = 1;
  const MAX = 45;
  const winnerNumbers = [1, 2, 3, 4, 5, 6];

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  test.each([randomNumber(MAX)])('올바른 보너스 번호 테스트', (input) => {
    expect(() => {
      validateBonusNumber(input, winnerNumbers);
    }).not.toThrow();
  });

  test.each([[''], , ['     '], ['O'], ['1e3']])(
    '보너스 번호가 숫자형태가 아닌 경우 테스트',
    (input) => {
      expect(() => {
        validateBonusNumber(input, winnerNumbers);
      }).toThrow();
    }
  );

  test.each([[`${MIN - 1}`], [`${MAX + 1}`]])(
    '보너스 번호 숫자 범위를 벗어난 경우 테스트',
    (input) => {
      expect(() => {
        validateBonusNumber(input, winnerNumbers);
      }).toThrow();
    }
  );

  test('보너스 번호와 당첨번호 중복 테스트', () => {
    const bonusNumber = '6';

    expect(() => {
      validateBonusNumber(bonusNumber, winnerNumbers);
    }).toThrow();
  });
});

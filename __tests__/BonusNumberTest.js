import { validateBonusNumber } from '../src/util/Validation.js';

describe('보너스번호 테스트', () => {
  const MIN = 1;
  const MAX = 45;

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  test.each([randomNumber(MAX)])('올바른 보너스 번호 테스트', (input) => {
    expect(() => {
      validateBonusNumber(input);
    }).not.toThrow();
  });

  test.each([[''], , ['     '], ['O'], ['1e3']])(
    '보너스 번호가 숫자형태가 아닌 경우 테스트',
    (input) => {
      expect(() => {
        validateBonusNumber(input);
      }).toThrow();
    }
  );

  test.each([[`${MIN - 1}`], [`${MAX + 1}`]])(
    '보너스 번호 숫자 범위를 벗어난 경우 테스트',
    (input) => {
      expect(() => {
        validateBonusNumber(input);
      }).toThrow();
    }
  );
});

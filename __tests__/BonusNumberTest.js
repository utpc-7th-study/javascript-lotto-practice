import { validateBonusNumber } from '../src/util/Validation.js';

describe('보너스번호 테스트', () => {
  test('보너스번호가 숫자형태인 경우  테스트', () => {
    expect(() => {
      const input = '1';
      validateBonusNumber(input);
    }).not.toThrow('[ERROR]');
  });

  test.each([[''], , ['     '], ['O'], ['1e3']])(
    '보너스 번호가 숫자형태가 아닌 경우 테스트',
    (input) => {
      expect(() => {
        validateWinnerNumbers(input);
      }).toThrow();
    }
  );
});

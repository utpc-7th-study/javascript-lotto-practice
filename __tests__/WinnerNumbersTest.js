import { validateWinnerNumbers } from '../src/util/Validation.js';

describe('당첨번호 테스트', () => {
  test('콤마(,)를 기준으로 6자리가 아닌 경우 테스트', () => {
    expect(() => {
      const input = '1,2,3,4,5,6,7';
      validateWinnerNumbers(input);
    }).toThrow('[ERROR]');
  });

  test('콤마(,)를 기준으로 6자리인 경우 테스트', () => {
    expect(() => {
      const input = '1,2,3,4,5,6';
      validateWinnerNumbers(input);
    }).not.toThrow('[ERROR]');
  });

  test.each([['1,2,3,4,5, '], ['1,2,3,4,5,q'], ['1,2,3,4,5,O'], ['1,2,3,4,5,   9    ']])(
    '콤마(,)를 기준으로 숫자형태가 아닌 경우 테스트',
    (input) => {
      expect(() => {
        validateWinnerNumbers(input);
      }).toThrow();
    }
  );
});

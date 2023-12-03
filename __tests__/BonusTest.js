import Bonus from '../src/domains/Bonus.js';

describe('Bonus 클래스 테스트', () => {
  test.each([
    [[2, 6, 15, 27, 38, 39], true],
    [[3, 6, 8, 11, 32, 43], false],
  ])(
    '보너스 번호가 주어진 숫자 배열에 포함 여부를 알려준다.',
    (numbers, expected) => {
      // given
      const bonus = new Bonus(27);

      // when
      const result = bonus.includedIn(numbers);

      // then
      expect(result).toBe(expected);
    }
  );
});

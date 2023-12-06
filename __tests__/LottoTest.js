import Lotto from '../src/domains/Lotto.js';
import Bonus from '../src/domains/Bonus.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[41, 42, 43, 44, 45, 46]],
    [[11, 11, 23, 34, 40, 42]],
    [[11, 11, 23, 34, 40, 'a']],
  ])('로또 번호에 대한 예외처리', (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('주어진 숫자 배열이 가지는 로또 번호와의 동일한 숫자의 개수를 구한다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 44, 45];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const result = lotto.countSame(numbers);

    // then
    expect(result).toBe(4);
  });

  test('로또가 가지는 번호인지 확인한다.', () => {
    // given
    const lottoNumbers = [7, 12, 33, 34, 40, 42];
    const lotto = new Lotto(lottoNumbers);
    const number = new Bonus(40, [1, 7, 12, 33, 34, 42]);

    // when
    const result = lotto.includes(number);

    // then
    expect(result).toBe(true);
  });
});

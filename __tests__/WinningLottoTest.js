import WinningLotto from '../src/domains/WinningLotto.js';
import Lotto from '../src/domains/Lotto.js';

describe('WinningLotto 클래스 테스트', () => {
  test('당첨 로또와 발행된 로또의 동일하게 가지는 번호의 개수를 구한다.', () => {
    // given
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    const lotto = new Lotto([4, 5, 11, 22, 33, 44]);

    // when
    const result = winningLotto.countSameNumber(lotto);

    expect(result).toBe(2);
  });
});

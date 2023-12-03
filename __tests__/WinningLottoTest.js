import WinningLotto from '../src/domains/WinningLotto.js';
import Lotto from '../src/domains/Lotto.js';

describe('WinningLotto 클래스 테스트', () => {
  test('당첨 로또와 발행된 로또의 동일하게 가지는 번호의 개수를 구한다.', () => {
    // given
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    const lotto = new Lotto([4, 5, 11, 22, 33, 44]);

    // when
    const result = winningLotto.checkSameNumber(lotto);

    expect(result).toBe(2);
  });

  test('로또가 보너스 번호 가지는지 확인한다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winningLotto = new WinningLotto(numbers, bonusNumber);
    const lotto = new Lotto([7, 8, 9, 10, 11, 12]);

    // when
    const result = winningLotto.checkBonus(lotto);

    // then
    expect(result).toBe(true);
  });
});

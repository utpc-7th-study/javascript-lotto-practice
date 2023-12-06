import LottoArray from '../src/domains/LottoArray.js';
import WinningLotto from '../src/domains/WinningLotto.js';

describe('LottoArray 클래스 테스트', () => {
  test('주어진 랜덤 숫자들로 로또를 발행한다.', () => {
    // given
    const numbersArray = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [45, 44, 43, 22, 20, 21],
      [34, 32, 28, 16, 25, 41],
    ];
    const lottoArray = new LottoArray();

    // when
    lottoArray.set(numbersArray);

    // then
    // get 메서드가 있어야 함.
    // expect(lottoArray.get().length).toEqual(numbersArray.length);
  });

  test('모든 발행 로또들을 당첨 로또와 비교한 결과를 구한다.', () => {
    // given
    const numbersArray = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 7, 10, 11, 12],
      [2, 3, 4, 5, 6, 7],
      [34, 32, 28, 16, 25, 41],
    ];
    const lottoArray = new LottoArray();
    lottoArray.set(numbersArray);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

    // when
    const result = lottoArray.compareTo(winningLotto);

    // then
    expect(result).toEqual([
      { sameNumbers: 6, bonus: false },
      { sameNumbers: 2, bonus: true },
      { sameNumbers: 5, bonus: true },
      { sameNumbers: 0, bonus: false },
    ]);
  });
});

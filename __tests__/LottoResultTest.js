import LottoResult from '../src/domains/LottoResult.js';
import WinningLotto from '../src/domains/WinningLotto.js';
import LottoArray from '../src/domains/LottoArray.js';

describe('LottoResult 클래스 테스트', () => {
  test('총 수익률을 구한다.', () => {
    // given
    const lottoArray = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [3, 4, 5, 8, 9, 10],
    ];
    const lottos = new LottoArray();
    lottos.set(lottoArray);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lottoResult = new LottoResult();
    lottoResult.create(lottos, winningLotto);

    // when
    const result = lottoResult.calculateRateOfWinnings(lottoArray.length);

    // then
    expect(result).toBe(51500125);
  });
});

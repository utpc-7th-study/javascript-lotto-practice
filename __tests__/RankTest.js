import Rank from '../src/domains/Rank.js';

describe('Rank 클래스 테스트', () => {
  test('동일한 숫자 개수와 보너스 여부 통해 당첨 등수 구한다.', () => {
    // given
    const compareResults = [
      { sameNumbers: 5, bonus: true },
      { sameNumbers: 6, bonus: false },
      { sameNumbers: 3, bonus: true },
      { sameNumbers: 1, bonus: false },
    ];
    const ranks = new Rank();

    // when
    const result = ranks.findWinningResult(compareResults);

    // then
    expect(result).toEqual([2, 1, 5]);
  });
});

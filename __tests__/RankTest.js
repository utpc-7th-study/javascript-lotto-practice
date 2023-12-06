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

  test.each([
    [1, 1, 2000000000],
    [2, 3, 90000000],
    [3, 2, 3000000],
    [4, 7, 350000],
    [5, 6, 30000],
  ])(
    '당첨 등수와 당첨 개수를 통해 총 수익액을 구한다.',
    (rankPlace, count, winningsAmount) => {
      // given
      const rank = new Rank();

      // when
      const result = rank.getWinningsAmount(rankPlace, count);

      // then
      expect(result).toBe(winningsAmount);
    }
  );

  test('당첨 등수에 대한 당첨 금액과 조건을 알려준다', () => {
    // given
    const rank = new Rank();

    // when
    const result = rank.getInformation(2);

    // then
    expect(result).toEqual([
      2,
      30000000,
      {
        sameNumbers: 5,
        bonus: true,
      },
    ]);
  });
});

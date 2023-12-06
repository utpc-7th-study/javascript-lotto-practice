import RankItem from '../src/domains/RankItem.js';

describe('RankItem 클래스 테스트', () => {
  test.each([
    [
      {
        rankPlace: 1,
        winningsAmount: 2000000000,
        requirements: {
          sameNumbers: 6,
        },
      },
      { sameNumbers: 6, bonus: false },
    ],
    [
      {
        rankPlace: 2,
        winningsAmount: 30000000,
        requirements: {
          sameNumbers: 5,
          bonus: true,
        },
      },
      { sameNumbers: 5, bonus: true },
    ],
    [
      {
        rankPlace: 3,
        winningsAmount: 1500000,
        requirements: {
          sameNumbers: 5,
          bonus: false,
        },
      },
      { sameNumbers: 5, bonus: false },
    ],
    [
      {
        rankPlace: 4,
        winningsAmount: 50000,
        requirements: {
          sameNumbers: 4,
        },
      },
      { sameNumbers: 4, bonus: true },
    ],
    [
      {
        rankPlace: 5,
        winningsAmount: 5000,
        requirements: {
          sameNumbers: 3,
        },
      },
      { sameNumbers: 3, bonus: true },
    ],
  ])(
    '주어진 동일한 숫자 개수와 보너스 여부로 당첨 조건 만족하는지 확인한다.',
    ({ rankPlace, winningsAmount, requirements }, input) => {
      // given
      const rankItem = new RankItem(rankPlace, winningsAmount, requirements);

      // when
      const result = rankItem.isWinning(input);

      // then
      expect(result).toBe(true);
    }
  );
});

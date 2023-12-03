import LottoGame from '../src/domain/LottoGame.js';

describe('구입금액 테스트', () => {
  let lottoGame;
  const MIN = 1000;
  const MAX = 1000000;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test.each([['3000'], [MIN], [MAX]])('올바른 구입금액 테스트', (input) => {
    expect(() => {
      lottoGame.purchaseLotto(input);
    }).not.toThrow();
  });

  test.each([[''], ['3000원'], ['3000 '], ['30 00'], ['3OOO'], ['1e3']])(
    '잘못된 구입금액 테스트 : 숫자형태가 아닌 경우',
    (input) => {
      expect(() => {
        lottoGame.purchaseLotto(input);
      }).toThrow();
    }
  );

  test.each([['500'], ['1250'], ['1250']])(
    '잘못된 구입금액 테스트 : 1000원 단위로 나누어지지 않는 경우',
    (input) => {
      expect(() => {
        lottoGame.purchaseLotto(input);
      }).toThrow();
    }
  );

  test.each([[MIN - 1], [MIN - 1000], [-MIN]])(
    '잘못된 구입금액 테스트 : 최소 금액 테스트',
    (input) => {
      expect(() => {
        lottoGame.purchaseLotto(input);
      }).toThrow();
    }
  );

  test.each([[MAX + 1], [[MAX + 1000]]])('잘못된 구입금액 테스트 : 최대 금액 테스트', (input) => {
    expect(() => {
      lottoGame.purchaseLotto(input);
    }).toThrow();
  });
});

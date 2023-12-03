import LottoGame from '../src/domain/LottoGame.js';

describe('구입금액 테스트', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('올바른 구입금액 테스트', () => {
    const input = '3000';

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
});

import LottoMachine from '../src/domain/LottoMachine.js';

describe('로또 기계 테스트', () => {
  test('로또 구입 금액이 숫자가 아닌 경우 예외가 발생한다.', () => {
    // given
    const price = 'abc';
    // when & then
    expect(() => new LottoMachine(price)).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1000 단위 숫자가 아닌 경우 예외가 발생한다', () => {
    // given
    const price = 1500;
    expect(() => new LottoMachine(price)).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 최소 금액보다 적을 경우 예외가 발생한다.', () => {
    const price = 500;

    expect(() => new LottoMachine(price)).toThrow('[ERROR]');
  });
});

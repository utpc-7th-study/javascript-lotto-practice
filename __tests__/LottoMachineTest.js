import LottoMachine from '../src/domains/LottoMachine.js';

describe('user의 구매금액 예외처리 확인', () => {
  test('0보다 작은 금액을 입력시에 예외가 발생해야 한다.', () => {
    // given
    const money = '-1';

    // when
    // then
    expect(() => {
      new LottoMachine(money);
    }).toThrow('[ERROR]');
  });

  test('1000원단위가 아닌 값일때 예외가 발생해야 한다.', () => {
    // given
    const money = '1100';

    // when
    // then
    expect(() => {
      new LottoMachine(money);
    }).toThrow('[ERROR]');
  });

  test('올바른 값이 들어왔을때 예외가 발생하지 않아야 한다.', () => {
    // given
    const money = '1000';

    // when
    // then
    expect(() => {
      new LottoMachine(money);
    }).not.toThrow('[ERROR]');
  });
});

describe('method : purchase test', () => {
  test('구매한 금액만큼의 로또를 반환해야 한다.', () => {
    // given
    const money = '5000';
    const lottoMachine = new LottoMachine(money);

    // when
    const result = lottoMachine.purchase();

    // then
    expect(result).toHaveLength(money / 1000);
  });
});

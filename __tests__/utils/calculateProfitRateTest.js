import {
  calculateProfit,
  calculateProfitRate,
} from '../../src/utils/calculateProfitRate';

describe('calculateProfitRate test', () => {
  test('반환값은 소수점 1자리까지만 표현해야 한다.', () => {
    // given
    const buyPrice = 1000;
    const profit = 10000;
    // when
    const profitRate = calculateProfitRate(buyPrice, profit);
    const decimalPoint = [...profitRate.split('.')[1]]
      .filter((char) => char !== '%')
      .join('');

    // then
    expect(decimalPoint).toHaveLength(1);
  });

  test('출력 형식 예제 테스트', () => {
    // given
    const buyPrice = 8000;
    const profit = 5000;
    // when
    const result = calculateProfitRate(buyPrice, profit);

    // then
    expect(result).toBe('62.5%');
  });

  beforeEach(() => {
    jest
      .spyOn(require('../../src/utils/calculateProfitRate'), 'calculateProfit')
      .mockReturnValue(1000000);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('1,000,000.0%의 수익률이 예상될때 형식이 동일해야 한다.', () => {
    // given
    const mockBuyPrice = 1000;
    const mockProfit = 10000000;

    // when
    const result = calculateProfitRate(mockBuyPrice, mockProfit);

    // then
    expect(result).toBe('1,000,000.0%');
  });
});

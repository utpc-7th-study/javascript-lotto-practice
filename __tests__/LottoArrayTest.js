import LottoArray from '../src/domains/LottoArray.js';

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
});

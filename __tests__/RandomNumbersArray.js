import RandomNumbersArray from '../src/domains/RandomNumbersArray.js';

describe('RandomNumbersArray 클래스 테스트', () => {
  test('주어진 개수만큼 랜덤 숫자 배열을 발행한다.', () => {
    // given
    const count = 7;

    // when
    const result = RandomNumbersArray.create(count);

    // then
    expect(result.length).toBe(count);
  });
});

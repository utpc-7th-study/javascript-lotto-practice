import createRandomNumbers from '../../src/utils/createRandomNumbers';

describe('createRadomNumbers test', () => {
  test('입력한 길이만큼의 배열을 반환해야 한다.', () => {
    // given
    const range = {
      minInclusive: 1,
      maxInclusive: 45,
      length: 6,
    };

    // when
    const result = createRandomNumbers(range);

    // then
    expect(result).toHaveLength(range.length);
  });

  test('범위 내의 숫자만 있어야 한다.', () => {
    // given
    const range = {
      minInclusive: 1,
      maxInclusive: 45,
      length: 6,
    };

    // when
    const result = createRandomNumbers(range).every((number) => {
      return number >= 1 && number <= 45;
    });

    // then
    expect(result).toBe(true);
  });

  test('랜덤 숫자를 생성했을때 중복이 없어야 한다.', () => {
    // given
    const range = {
      minInclusive: 1,
      maxInclusive: 45,
      length: 6,
    };

    // when
    const result = new Set(createRandomNumbers(range));

    // then
    expect([...result]).toHaveLength(range.length);
  });
});

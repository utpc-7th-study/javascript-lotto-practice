import { Lotto, PublishedLotto, WinningLotto } from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    // given
    // when
    // then
    expect(() => {
      new PublishedLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    // given
    // when
    // then
    expect(() => {
      new PublishedLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 범위 외의 값이 있으면 예외가 발생해야 한다', () => {
    // given
    // when
    // then
    expect(() => {
      new PublishedLotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('user가 입력한 로또번호에 공백이 존재할때 예외가 발생해야 한다', () => {
    // given
    const SPACING = ' ';
    const userInput = `1, 2, 3, 4, 5,${SPACING}6`;

    // when
    // then
    expect(() => {
      new WinningLotto(userInput);
    }).toThrow('[ERROR]');
  });

  test('user가 입력한 로또번호가 로또번호 형식에 맞지않을때 예외가 발생해야 한다', () => {
    // given
    const userInput = '1, 2, 3, 4, 5, 6';

    // when
    // then
    expect(() => {
      new WinningLotto(userInput);
    }).toThrow('[ERROR]');
  });

  test('상속받은 클래스는 모두 Lotto 클래스의 인스턴스여야 한다', () => {
    // given
    // when
    // then
    expect(new WinningLotto('1,2,3,4,5,6')).toBeInstanceOf(Lotto);
    expect(new PublishedLotto([1, 2, 3, 4, 5, 6])).toBeInstanceOf(Lotto);
  });
});

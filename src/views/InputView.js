import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return Number(money);
  },

  async readWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    return numbers.split(',').map((number) => Number(number));
  },
};

export default InputView;

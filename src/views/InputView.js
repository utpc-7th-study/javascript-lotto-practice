import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return Number(money);
  },
};

export default InputView;

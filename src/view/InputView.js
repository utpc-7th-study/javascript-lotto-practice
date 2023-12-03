import { Console } from '@woowacourse/mission-utils';

const INPUT_LOTTO_PRICE_MESSAGE = '구입금액을 입력해 주세요.\n';

const InputView = {
  async readLottoPrice() {
    return await Console.readLineAsync(INPUT_LOTTO_PRICE_MESSAGE);
  },
};

export default InputView;

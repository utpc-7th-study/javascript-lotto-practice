import { Console } from '@woowacourse/mission-utils';

const INPUT_LOTTO_PRICE_MESSAGE = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBERS_MESSAGE = '당첨 번호를 입력해 주세요.\n';

const InputView = {
  async readLottoPrice() {
    return await Console.readLineAsync(INPUT_LOTTO_PRICE_MESSAGE);
  },

  async readWinnerNumbers() {
    return await Console.readLineAsync(INPUT_WINNING_NUMBERS_MESSAGE);
  },
};

export default InputView;

import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async enterBuyAmount() {
    const buyAmount = await this.read('구입금액을 입력해주세요.\n');
    return buyAmount;
  },

  async enterLottoNumbers() {
    const lottoNumbers = await this.read('당첨 번호를 입력해주세요.\n');
    return lottoNumbers;
  },

  async enterBonusNumber() {
    const bonusNumber = await this.read('보너스 번호를 입력해주세요.\n');
    return bonusNumber;
  },

  async read(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};

export default InputView;

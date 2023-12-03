import { Console } from '@woowacourse/mission-utils';
import LOTTO_WINNING_INFO from '../constant/lotto/winningInfo.js';
import addCommaToNumber from '../utils/addCommaToNumber.js';

const OutputView = {
  boughtLottos(lottos) {
    // lottos : [[],[]]
    const message = [
      `${lottos.length}개를 구매했습니다.`,
      ...lottos.map((lottoNumbers) => [
        `[${lottoNumbers
          .sort((prevNumber, currentNumber) => prevNumber - currentNumber)
          .join(', ')}]`,
      ]),
    ];

    this.print(message.join('\n'));
  },

  correctTemp(matchNumber, prize, matchCount, bonus) {
    const message = [`${matchNumber}개 일치`];
    if (bonus) message.push(', 보너스 볼 일치');
    message.push(` (${addCommaToNumber(prize)}원) - ${matchCount}개`);

    return message.join('');
  },

  lottoResult(lottoStatistics) {
    const { first, second, third, fourth, fifty, roi } = lottoStatistics;
    const message = [
      '당첨 통계',
      '---',
      this.correctTemp(LOTTO_WINNING_INFO.fifty.correct, LOTTO_WINNING_INFO.fifty.prize, fifty),
      this.correctTemp(LOTTO_WINNING_INFO.fourth.correct, LOTTO_WINNING_INFO.fourth.prize, fourth),
      this.correctTemp(LOTTO_WINNING_INFO.third.correct, LOTTO_WINNING_INFO.third.prize, third),
      this.correctTemp(LOTTO_WINNING_INFO.second.correct,LOTTO_WINNING_INFO.second.prize,second, true),
      this.correctTemp(LOTTO_WINNING_INFO.first.correct, LOTTO_WINNING_INFO.first.prize, first),
      `총 수익률은 ${roi}%입니다.`,
    ];

    this.print(message.join('\n'));
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;

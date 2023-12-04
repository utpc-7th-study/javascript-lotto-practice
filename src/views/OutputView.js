import { Console } from '@woowacourse/mission-utils';
import addComma from '../utils/addComma.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottosQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.get().join(', ')}]`);
    });

    Console.print('');
  },

  printWinningResult(results) {
    Console.print('\n당첨 통계\n---');
    results.forEach((result) => {
      const [winningAmount, requirements, count] = result;
      Console.print(
        `${requirements.sameNumbers}개 일치 (${addComma(
          winningAmount
        )}원) - ${count}개`
      );
    });
  },

  printWinningsRate(WinningsRate) {
    Console.print(`총 수익률은 ${WinningsRate}%입니다.`);
  },
};

export default OutputView;

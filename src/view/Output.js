import { Console } from '@woowacourse/mission-utils';

export const OUTPUTS = {
  printPrompt(prompt) {
    Console.print(`${prompt}`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  },

  printStatistics(matchObj) {
    Console.print('\n당첨 통계\n---');
    Console.print(
      `3개 일치 (5,000원) - ${matchObj.three ?? 0}개\n4개 일치 (50,000원) - ${
        matchObj.four ?? 0
      }개\n5개 일치 (1,500,000원) - ${
        matchObj.five ?? 0
      }개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        matchObj.bonus ?? 0
      }개\n6개 일치 (2,000,000,000원) - ${matchObj.six ?? 0}개`
    );
  },

  printRateOfReturn(rate) {
    Console.print(`총 수익률은 ${rate ?? 0}%입니다.`);
  },
};

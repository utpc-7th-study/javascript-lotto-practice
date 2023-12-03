import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottoQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    const result = lottos.reduce((acc, lotto) => acc + `[${lotto.join(', ')}]\n`, '');
    Console.print(result);
  },

  printResult(result) {
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${result[0]}개
4개 일치 (50,000원) - ${result[1]}개
5개 일치 (1,500,000원) - ${result[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개
6개 일치 (2,000,000,000원) - ${result[4]}개`);
  },

  printPrift(profit) {
    Console.print(`총 수익률은 ${profit.toFixed(1).toLocaleString()}%입니다.`);
  },
};

export default OutputView;

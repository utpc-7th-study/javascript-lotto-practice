import { Console } from '@woowacourse/mission-utils';

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
    Console.print('당첨 통계\n---');
    results.forEach((result) => {
      const [winningAmount, requirements, count] = result;
      Console.print(
        `${requirements.sameNumbers}개 일치 (${winningAmount}원), - ${count}개`
      );
    });
  },
};

export default OutputView;

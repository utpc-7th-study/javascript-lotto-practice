import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottos(lottos) {
    let result = '';

    lottos.forEach((lotto) => {
      result += `[ ${lotto.join(', ')} ]\n`;
    });

    Console.print(result);
  },
};

export default OutputView;

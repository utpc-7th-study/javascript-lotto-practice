import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottoQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
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

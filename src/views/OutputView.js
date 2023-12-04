import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottosQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },
};

export default OutputView;

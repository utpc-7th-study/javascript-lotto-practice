import { Console } from '@woowacourse/mission-utils';

export const INPUTS = {
  async inputAmount(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);

    return Number(userInput);
  },

  async inputWinningNumber(message) {
    const userInput = await Console.readLineAsync(`\n${message}\n`);
    const userInputList = userInput
      .split(',')
      .map((element) => Number(element));

    return userInputList;
  },

  async inputBonusNumber(message) {
    const userInput = await Console.readLineAsync(`\n${message}\n`);

    return Number(userInput);
  },
};

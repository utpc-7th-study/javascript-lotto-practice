import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = {
  generate(min, max, length) {
    return Random.pickUniqueNumbersInRange(min, max, length);
  },
};

export default generateRandomNumbers;

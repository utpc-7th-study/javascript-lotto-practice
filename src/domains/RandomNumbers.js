import { Random } from '@woowacourse/mission-utils';

const RandomNumbers = {
  create() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

export default RandomNumbers;

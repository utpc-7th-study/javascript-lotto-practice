import { Random } from '@woowacourse/mission-utils';

const createRandomNumbers = ({ minInclusive, maxInclusive, length }) => {
  return Random.pickUniqueNumbersInRange(minInclusive, maxInclusive, length);
};

export default createRandomNumbers;

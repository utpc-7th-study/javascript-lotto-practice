import RandomNumbers from './RandomNumbers.js';

const RandomNumbersArray = {
  create(number) {
    let arr = [];
    while (arr.length < number) {
      arr.push(RandomNumbers.create());
    }

    return arr;
  },
};

export default RandomNumbersArray;

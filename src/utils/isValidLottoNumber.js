import { MAX, MIN } from '../constant/lotto/range.js';

const isValidLottoNumber = (number) => number >= MIN.LOTTO_NUMBER && number <= MAX.LOTTO_NUMBER;

export default isValidLottoNumber;

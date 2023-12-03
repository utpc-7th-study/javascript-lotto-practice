import addCommaToNumber from '../../utils/addCommaToNumber.js';
import LOTTO_PRICE from './price.js';
import { MIN } from './range.js';

const ERROR_PREFIX = '[ERROR]';

const LOTTO_ERROR_MESSAGE = {
  INVALID_NUMBER: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다.`,

  LESS_THAN_MIN_PRICE: `${ERROR_PREFIX} ${addCommaToNumber(
    MIN.BUY_AMOUNT,
  )}원 이상부터 구매 가능합니다.`,

  INVALID_PRICE: `${ERROR_PREFIX} ${addCommaToNumber(
    LOTTO_PRICE,
  )} 단위 금액으로만 구매할 수 있습니다.`,
};

export default LOTTO_ERROR_MESSAGE;

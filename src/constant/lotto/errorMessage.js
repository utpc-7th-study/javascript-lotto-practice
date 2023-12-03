import addCommaToNumber from '../../utils/addCommaToNumber.js';
import LOTTO_PRICE from './price.js';
import { MAX, MIN } from './range.js';
import LOTTO_WINNING_INFO from './winningInfo.js';

const ERROR_PREFIX = '[ERROR]';

const LOTTO_ERROR_MESSAGE = {
  INVALID_NUMBER: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다.`,

  LESS_THAN_MIN_PRICE: `${ERROR_PREFIX} ${addCommaToNumber(
    MIN.BUY_AMOUNT,
  )}원 이상부터 구매 가능합니다.`,

  INVALID_PRICE: `${ERROR_PREFIX} ${addCommaToNumber(
    LOTTO_PRICE,
  )} 단위 금액으로만 구매할 수 있습니다.`,

  SPLIT_TO_COMMA: `${ERROR_PREFIX} 당첨 번호를 쉼표 기준으로 나누어 입력해주세요.`,

  INVALID_LOTTO_LENGTH: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_WINNING_INFO.first.correct}개여야 합니다.`,

  INVALID_NUMBER_RANGE: `${ERROR_PREFIX} 로또 번호는 ${MIN.LOTTO_NUMBER}부터 ${MAX.LOTTO_NUMBER} 사이의 숫자여야 합니다.`,

  HAVE_DUPLICATE: `${ERROR_PREFIX} 중복된 로또 번호가 있습니다.`
};

export default LOTTO_ERROR_MESSAGE;

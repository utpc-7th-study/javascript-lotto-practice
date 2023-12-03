const MAXIMUM = 1000000;

class LottoMaker {
  generateLotto(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
  }

  #validateLottoPrice(lottoPrice) {
    this.#validateNumberType(lottoPrice);
    this.#validateCurrencyUnit(lottoPrice);
    this.#validateMinimumPrice(lottoPrice);
    this.#validateMaximumPrice(lottoPrice);
  }

  #validateNumberType(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('[ERROR] 로또 금액은 숫자형태로만 입력이 가능합니다.');
    }
  }

  #validateCurrencyUnit(input) {
    if (Number(input) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액은 1000원 단위로만 구입 가능합니다.');
    }
  }

  #validateMinimumPrice(input) {
    if (Number(input) < 1000) {
      throw new Error('[ERROR] 로또 금액은 1000원 이상부터 구입 가능합니다.');
    }
  }

  #validateMaximumPrice(input) {
    if (Number(input) > MAXIMUM) {
      throw new Error(`[ERROR] 로또 금액은 ${MAXIMUM} 까지만 구입 구입 가능합니다.`);
    }
  }
}

export default LottoMaker;

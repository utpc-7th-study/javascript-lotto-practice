class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLimitLottoLength(numbers);
    this.#validateLottoRange(numbers);
    this.#validateDuplicateLottoNumber(numbers);
  }

  #validateLimitLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateLottoRange(numbers) {
    const isValidLottoRange = numbers.every((number) => number >= 1 && number <= 45);

    if (!isValidLottoRange) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 범위만 가능합니다.');
    }
  }

  #validateDuplicateLottoNumber(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  getLottos() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;

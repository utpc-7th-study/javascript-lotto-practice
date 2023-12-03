class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  countSameNumber(lotto) {
    return lotto.countSame(this.#numbers);
  }

  countSame(numbers) {
    const sameNumbers = numbers.filter((number) =>
      this.#numbers.includes(number)
    );

    return sameNumbers.length;
  }

  includes(bonus) {
    return bonus.includedIn(this.#numbers);
  }
}

export default Lotto;

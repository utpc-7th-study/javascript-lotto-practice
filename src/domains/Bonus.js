class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {}

  includedIn(numbers) {
    return numbers.includes(this.#number);
  }
}

export default Bonus;

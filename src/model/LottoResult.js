class LottoResult {
  #amount;
  #matchObj;

  constructor(amount, matchObj) {
    this.#amount = amount;
    this.#matchObj = matchObj;
  }

  #calcRevenue(matchObj, matcheAmountObj) {
    let revenue = 0;

    Object.entries(matchObj).forEach(([key, value]) => {
      if (value) {
        revenue += matcheAmountObj[key] * value;
      }
    });

    return revenue;
  }

  getRateOfReturn() {
    const matcheAmountObj = {
      three: 5000,
      four: 50000,
      five: 1500000,
      bonus: 30000000,
      six: 2000000000,
    };
    const revenue = this.#calcRevenue(this.#matchObj, matcheAmountObj);
    const rateOfReturn = (revenue / (this.#amount / 100)).toFixed(1);

    return rateOfReturn;
  }
}

export default LottoResult;

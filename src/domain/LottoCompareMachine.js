class LottoCompareMachine {
  #winnerNumbers;
  #bonusNumber;

  constructor(winnerNumbers, bonusNumber) {
    this.#winnerNumbers = winnerNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateResult(lottos) {
    return this.#matchedNumbers(lottos);
  }

  #matchedNumbers(lottos) {
    const matchedLottos = this.#getMatchedLottos(lottos);
    const result = Array.from({ length: 5 }).fill(0);

    matchedLottos.forEach(([matchedQuantity, hasBonus]) => {
      if (matchedQuantity === 3) result[0] += 1;
      if (matchedQuantity === 4) result[1] += 1;
      if (matchedQuantity === 5 && !hasBonus) result[2] += 1;
      if (matchedQuantity === 5 && hasBonus) result[3] += 1;
      if (matchedQuantity === 6) result[4] += 1;
    });

    return result;
  }

  #getMatchedLottos(lottos) {
    return lottos.map((lotto) => [
      this.#countTotalMatchedNumbers(lotto),
      this.#isBonusNumber(lotto),
    ]);
  }

  #countTotalMatchedNumbers(lottos) {
    const result = this.#winnerNumbers.reduce((acc, cur) => {
      return lottos.includes(cur) ? acc + 1 : acc;
    }, 0);
    return result;
  }

  #isBonusNumber(lottos) {
    return lottos.includes(this.#bonusNumber);
  }
}

export default LottoCompareMachine;

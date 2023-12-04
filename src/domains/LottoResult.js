import Rank from './Rank.js';

class LottoResult {
  #result;

  constructor() {
    this.#result = new Map();
  }

  create(lottoArray, winningLotto) {
    const results = lottoArray.compareTo(winningLotto);

    const rank = new Rank();
    const winningResult = rank.findWinningResult(results);
  }
}

export default LottoResult;

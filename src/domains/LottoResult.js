import Rank from './Rank.js';
import { RANKS } from '../constants/rank.js';

class LottoResult {
  #result;

  constructor() {
    this.#result = new Map();
    this.#reset();
  }

  #reset() {
    RANKS.forEach((RANK) => this.#result.set(RANK.rankPlace, 0));
  }

  create(lottoArray, winningLotto) {
    const results = lottoArray.compareTo(winningLotto);
    const rank = new Rank();
    const winningRanks = rank.findWinningResult(results);
    this.#set(winningRanks);
  }

  #set(ranks) {
    ranks.forEach((rank) => {
      this.#result.set(rank, this.#result.get(rank) + 1);
    });
  }
}

export default LottoResult;

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

  calculateTotalWinnings() {
    let totalWinnings = 0;
    this.#result.forEach((count, rankPlace) => {
      if (count > 0) {
        const ranks = new Rank();
        totalWinnings += ranks.getWinningsAmount(rankPlace, count);
      }
    });

    return totalWinnings;
  }

  calculateRateOfWinnings(purchaseQuantity) {
    const totalWinnings = this.calculateTotalWinnings();

    return (totalWinnings / (purchaseQuantity * 1000)) * 100;
  }
}

export default LottoResult;

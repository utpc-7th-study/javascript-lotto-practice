import RankItem from './RankItem.js';
import { RANKS } from '../constants/rank.js';

class Rank {
  #ranks;

  constructor() {
    this.#ranks = [];
    this.#set();
  }

  #set() {
    RANKS.forEach((RANK) => {
      const { rankPlace, winningsAmount, requirements } = RANK;
      this.#ranks.push(new RankItem(rankPlace, winningsAmount, requirements));
    });
  }

  findWinningResult(results) {
    let winningResult = [];
    results.forEach((result) => {
      if (this.#findWinningRank(result) !== undefined) {
        winningResult.push(this.#findWinningRank(result));
      }
    });

    return winningResult;
  }

  #findWinningRank(result) {
    const winningRank = this.#ranks.filter((rank) => {
      return rank.isWinning(result);
    });

    if (winningRank.length === 0) return;

    return winningRank[0].getPlace();
  }

  getWinningsAmount(rankPlace, count) {
    let winningsAmount = 0;
    this.#ranks.forEach((rank) => {
      if (rank.isSame(rankPlace)) {
        winningsAmount = rank.getWinningsAmount(count);
      }
    });

    return winningsAmount;
  }

  getInformation(rankPlace) {
    const rank = this.#ranks.filter((rank) => rank.isSame(rankPlace))[0];

    return rank.getInformation();
  }
}

export default Rank;

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
}

export default Rank;

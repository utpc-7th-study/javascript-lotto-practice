import generateRandomNumbers from '../util/generateRandomNumbers.js';
import LottoMaker from './LottoMaker.js';
import User from './User.js';

class LottoGame {
  #user;

  constructor() {
    this.#user = new User(new LottoMaker(generateRandomNumbers));
  }

  purchaseLotto(lottoPrice) {
    this.#user.purchaseLotto(lottoPrice);
  }
}

export default LottoGame;

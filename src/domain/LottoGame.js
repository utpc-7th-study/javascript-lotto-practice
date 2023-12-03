import LottoMaker from './LottoMaker.js';
import User from './User.js';

class LottoGame {
  #user;

  constructor() {
    this.#user = new User(new LottoMaker());
  }

  purchaseLotto(lottoPrice) {
    this.#user.purchaseLotto(lottoPrice);
  }
}

export default LottoGame;

import deepFreeze from '../util/deepFreeze.js';

class User {
  #lottoMaker;
  #lottos;
  #lottoPrice;

  constructor(lottoMaker) {
    this.#lottoMaker = lottoMaker;
    this.#lottos = [];
    this.#lottoPrice = 0;
  }

  purchaseLotto(lottoPrice) {
    this.#lottoPrice = lottoPrice;
    this.#lottos = this.#lottoMaker.generateLotto(lottoPrice);
  }

  checkLottoNumbers() {
    return deepFreeze(this.#lottos);
  }
}

export default User;

class User {
  #lottoMaker;

  constructor(lottoMaker) {
    this.#lottoMaker = lottoMaker;
  }

  purchaseLotto(lottoPrice) {
    const lottos = this.#lottoMaker.generateLotto(lottoPrice);
  }
}

export default User;

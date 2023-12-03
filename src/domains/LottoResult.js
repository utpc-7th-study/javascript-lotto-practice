class LottoResult {
  #result;

  constructor() {
    this.#result = new Map();
  }

  create(lottoArray, winningLotto) {
    lottoArray.compare(winningLotto);
  }
}

export default LottoResult;

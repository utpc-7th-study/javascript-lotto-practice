import generateRandomNumbers from '../util/generateRandomNumbers.js';
import LottoCompareMachine from './LottoCompareMachine.js';
import LottoMaker from './LottoMaker.js';
import User from './User.js';

class LottoGame {
  #user;
  #lottoCompareMachine;

  constructor() {
    this.#user = new User(new LottoMaker(generateRandomNumbers));
    this.#lottoCompareMachine = null;
  }

  purchaseLotto(lottoPrice) {
    this.#user.purchaseLotto(lottoPrice);
    const lottos = this.#user.checkLottoNumbers();

    return lottos;
  }

  compareNumber(winnerNumbers, bonusNumber) {
    this.#lottoCompareMachine = new LottoCompareMachine(winnerNumbers, bonusNumber);
    const result = this.#user.checkLottoResult(this.#lottoCompareMachine);

    return result;
  }
}

export default LottoGame;

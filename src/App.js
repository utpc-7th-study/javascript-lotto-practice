import LottoContoller from './controller/LottoContoller.js';

class App {
  async play() {
    const lottoContoller = new LottoContoller();

    await lottoContoller.askBuyAmount();
    lottoContoller.generateLottos();
    await lottoContoller.askLottoNumbers();
    await lottoContoller.askBonusNumber();
    lottoContoller.printStatistics();
  }
}

export default App;

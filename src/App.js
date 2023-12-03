import LottoContoller from "./controller/LottoContoller.js";

class App {
  async play() {
    const lottoContoller = new LottoContoller();

    await lottoContoller.askBuyAmount();
    await lottoContoller.askLottoNumbers();
    await lottoContoller.askBonusNumber();
  }
}

export default App;

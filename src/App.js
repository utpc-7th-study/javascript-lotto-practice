import LottoContoller from "./controller/LottoContoller.js";

class App {
  async play() {
    const lottoContoller = new LottoContoller();

    await lottoContoller.askBuyAmount();
    await lottoContoller.askLottoNumbers();
  }
}

export default App;

import LottoContoller from "./controller/LottoContoller.js";

class App {
  async play() {
    const lottoContoller = new LottoContoller();

    lottoContoller.askBuyAmount();
  }
}

export default App;

import Controller from './controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    await controller.startLotto();
  }
}
const aa = new App();
aa.play();
export default App;

export default class Utils {

  static debounce(func, freq) {
    var readyToRun = true;
    let delay = freq === 0 ? 0 : (freq < 0 ? 1000 / -freq : 1000 / freq);

    return function() {
      if (readyToRun) {
        readyToRun = false;
        setTimeout(() => readyToRun = true, delay);
        func.apply(this, arguments);
      }
    };
  }

}

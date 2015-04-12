export default class Utils {

  static debounce(func, freq) {
    var context, args, last;
    let delay = freq === 0 ? 0 : (freq < 0 ? 1000 / -freq : 1000 / freq);
    return function() {
      context = this;
      args = arguments;
      let now = new Date().getTime();
      if (!last || ((now - last) > delay)) {
        last = now;
        func.apply(context, args);
      }
    };
  }

}
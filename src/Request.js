export default class Request {

  static get(url) {
    return new Promise((resolve, reject) => {
      let xhr = window.XMLHttpRequest === undefined ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 304) {
            resolve(xhr.responseText);
          } else {
            reject();
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  }

}

export default class Request {

  static get(url) {
    return new Promise((resolve, reject) => {
      var xhr;
      if (window.XMLHttpRequest !== undefined) {
        xhr = new window.XMLHttpRequest();
      } else if (window.ActiveXObject !== undefined) {
        xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
      } else {
        reject();
      }

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

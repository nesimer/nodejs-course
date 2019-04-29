async function sendQuery(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 300) {
          return resolve(JSON.parse(xhr.responseText));
        }
        return reject({
          status: this.status,
          message: this.statusText
        });
      }
    };
    xhr.open(method, url, true);
    xhr.send(data);
  });
}

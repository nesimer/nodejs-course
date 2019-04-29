const weather = require('weather-js');

const promisifyFind = options => {
  return new Promise((resolve, reject) => {
    weather.find(options, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { find: promisifyFind };

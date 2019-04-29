const weather = require('weather-js');

const callbackFind = (options, cb) => {
  return weather.find(options, (err, res) => {
    if (err) {
      console.error(err);
    }

    cb(res);
  });
};

module.exports = { find: callbackFind };

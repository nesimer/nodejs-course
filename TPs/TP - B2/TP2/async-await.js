const weather = require('weather-js');
const { promisify } = require('util');

const asyncFind = promisify(weather.find);

module.exports = { find: asyncFind };

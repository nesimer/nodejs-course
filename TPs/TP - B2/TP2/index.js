// @ts-nocheck
const asyncAwait = require('./async-await');
const promise = require('./promises');
const callback = require('./callback');

const args = process.argv.slice(2);
const degreeType = 'C';
const search = args[0];

const logWeather = weather =>
  console.log(
    `Il fait ${weather[0].current.skytext} et ${
      weather[0].current.temperature
    }°C à ${weather[0].current.observationpoint}.`
  );

const showWeather = async () => {
  switch (true) {
    case /^(async)/.test(args[1]):
      try {
        const result = await asyncAwait.find({ search, degreeType });
        logWeather(result);
      } catch (e) {
        console.error(e);
      }
      break;

    case /^(promise)/.test(args[1]):
      promise
        .find({ search, degreeType })
        .then(result => logWeather(result))
        .catch(e => console.error(e));
      break;
    default:
      result = callback.find({ search, degreeType }, logWeather);
      break;
  }
};

showWeather();

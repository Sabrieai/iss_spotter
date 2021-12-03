const request = require('request-promise-native');
const {nextISSTimesForMyLocation } = require('./iss_promised');
//first collect IP
//fetchMyIP()
// then pass that info along to fetch coord
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
//.then(nextISSTimesForMyLocation)
//.then(body => console.log(body));

const printPassTimes = function(passes) {
  for (const pass of passes) {
    console.log(`Next pass at ${new Date(pass.risetime)} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
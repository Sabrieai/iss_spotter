const { nextISSTimesForMyLocation } = require('./iss');

const printTime = function(passes) {
  for (const pass of passes) {
    console.log(`Next pass at ${new Date(pass.risetime)} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printTime(passTimes);
});


//fetchMyIP((error, ip) => {
//if (error) {
//console.log("It didn't work!" , error);
//return;
//}
//console.log('It worked! Returned IP:' , ip);
//});

/*
fetchCoordsByIP('70.55.16.237', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned fly over times:' , passTimes);
});
*/
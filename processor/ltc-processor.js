var request = require('request');

function getLtcInfo() {
  return new Promise(function (resolve, reject) {
    request('http://ltc.blockr.io/api/v1/coin/info', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      if (error) reject(error);
      resolve(body);
    });
  });

}

module.exports.getLtcInfo = getLtcInfo;
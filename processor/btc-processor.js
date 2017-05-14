var request = require('request');

function getBtcInfo() {
  return new Promise(function (resolve, reject) {
    request('http://btc.blockr.io/api/v1/coin/info', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      if (error) reject(error);
      resolve(body);
    });
  });

}

module.exports.getBtcInfo = getBtcInfo;
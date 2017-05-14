var express = require('express');
var router = express.Router();

var Ltc = require('../processor/ltc-processor');
var Btc = require('../processor/btc-processor');


router.get('/ltc', function(req, res, next) {
  Ltc.getLtcInfo().then(body => {
    res.send('get light coin body : ' + JSON.stringify(body));
  }).catch(err => {
    res.send('request error : ' + err);
  });
});

router.get('/btc', function(req, res, next) {
  Btc.getBtcInfo().then(body => {
    res.send('get bite coin body : ' + JSON.stringify(body));
  }).catch(err => {
    res.send('request error : ' + err);
  });
});

module.exports = router;

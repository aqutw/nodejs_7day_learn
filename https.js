var https = require('https');
var log = require('./inc/log');

var url = 'https://www.pixnet.net/';

log(url);

var options = {
        hostname: 'www.pixnet.net',
        port: 443,
        path: '/',
        method: 'GET'
    };

var request = https.request(options, function (response) {
  console.log(response);
});

request.end();


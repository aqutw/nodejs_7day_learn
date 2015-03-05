var http = require('http');
var https = require('https');

var url = 'http://www.pixnet.net/';
url = url.replace('http','https');

console.log(url);

https.get(url, function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});


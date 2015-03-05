var url = require('url');
var log = require('./inc/log');

log(
url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
);

log(
url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true)
);

log(
url.parse('//user:pass@host.com:8080/p/a/t/h?query=string#hash', false, true)
);

log(
url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
})
);

var querystring = require('querystring');
var log = require('./inc/log');

log(
querystring.parse('foo=bar&baz=qux&baz=quux&corge')
);

log(
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
);

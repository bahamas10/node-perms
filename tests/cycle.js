var perms = require('../');
var assert = require('assert');

console.log('Cycling every possible mode');
for (var i = 0; i <= 07777; i++) {
  assert.equal(i, perms.toMode(perms.toString(i)));
}

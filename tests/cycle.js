var perms = require('../');
var assert = require('assert');

console.log('Cycling every possible mode');
for (var i = 0; i <= 4095; i++) {
  var oct = pad(i.toString(8));
  assert.strictEqual(oct, perms.toMode(perms.toString(oct)));
}

function pad(s) {
  for (var i = s.length; i < 4; ++i) {
    s = '0' + s;
  }
  return s;
}

var perms = require('../');
var assert = require('assert');
var ex = {
  'rwxr-xr-x': '0755',
  'r--r--r--': '0444',
  'rwx------': '0700',
  'rwSrwS---': '6660',
  'rwxr-xr-t': '1755',
  'rwsrwsrwt': '7777',
  'rwsrwsrwx': '6777'
};

Object.keys(ex).forEach(function(s) {
  var p = perms.toMode(s);
  console.log('given: %s', s);
  console.log('toMode():  %s', p);
  console.log('should be: %s\n', ex[s]);
  assert.strictEqual(ex[s], p);
});

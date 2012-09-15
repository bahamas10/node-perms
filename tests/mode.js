var perms = require('../'),
    assert = require('assert'),
    ex = {
      '0755': 'rwxr-xr-x',
      '0444': 'r--r--r--',
      '0700': 'rwx------',
      '6660': 'rwSrwS---',
      '1755': 'rwxr-xr-t',
      '7777': 'rwsrwsrwt',
      '6777': 'rwsrwsrwx'
    };

Object.keys(ex).forEach(function(s) {
  var p = perms.toString(s);
  console.log('given: %s', s);
  console.log('toString(): %s', p);
  console.log('should be:  %s\n', ex[s]);
  assert.strictEqual(ex[s], p);
});

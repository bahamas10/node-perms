var perms = require('../');
var ex = ['rwxr-xr-x', 'r--r--r--', 'rwx------', 'rwSrwS---', 'rwxr-xr-t', 'rwsrwsrwt', 'rwsrwsrwx'];

ex.forEach(function(s) {
  var p = perms.toMode(s);
  console.log('given: %s', s);
  console.log('toString(): %s\n', p);
});

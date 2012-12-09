var perms = require('../');
var ex = ['0755', '644', '2750', '1000', 3752, 4777, 7777, 755];

ex.forEach(function(s) {
  var p = perms.toString(s);
  console.log('given: %s', s);
  console.log('toString(): %s\n', p);
});

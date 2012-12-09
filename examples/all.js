var perms = require('../');

for (var i = 0; i <= 4095; i++) {
  var oct = i.toString(8);
  var p = perms.toString(oct);
  console.log('given %s', oct);
  console.log(p);
}

var assert = require('assert');
var perms = require('./perms');

assert.strictEqual(0755, perms.toMode('rwxr-xr-x'));
assert.strictEqual(0644, perms.toMode('rw-r--r--'));
assert.strictEqual(01755, perms.toMode('rwxr-xr-t'));

perms
=====

Convert Unix style permissions to strings like ls (0755 => 'rwxr-xr-x')

Examples
--------

Given

``` js
var perms = require('perms')
```

Convert a mode to a human-readable string like ls(1) generates

``` js
var p = perms.toString('0755');
console.log(p);
```

yields

```
rwxr-xr-x
```

Also handles special permissions

``` js
var p = perms.toString('6660');
console.log(p);
```

yields

```
rwSrwS---
```

Go backwards as well!

``` js
var mode = perms.toMode('rwxr-xr-t');
console.log(mode);
```

yields

```
1755
```

*NOTE*: This module makes it super tempting to parse ls(1)... don't do that!

http://mywiki.wooledge.org/ParsingLs

Usage
-----

``` js
var perms = require('perms');
```

Functions
---------

### toMode(s)

Given a string, return the mode suitable for passing to `fs.chmod`

### toString(s)

Given a mode, return a string suitable for printing to a user

Installation
------------

    npm install perms

Tests
-----

    npm test

License
-------

MIT License

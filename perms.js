(function(global) {
  /**
   * Convert a mode like 0755 to a string like 'rwxr-xr-x'
   */
  function toString(mode) {
    var s = [];
    for (var i = 2; i >= 0; i--) {
      s.push((mode >> i * 3) & 4 ? 'r' : '-');
      s.push((mode >> i * 3) & 2 ? 'w' : '-');
      s.push((mode >> i * 3) & 1 ? 'x' : '-');
    }
    // optional
    if ((mode >> 9) & 4) // setuid
      s[2] = s[2] === 'x' ? 's' : 'S';
    if ((mode >> 9) & 2) // setgid
      s[5] = s[5] === 'x' ? 's' : 'S';
    if ((mode >> 9) & 1) // sticky
      s[8] = s[8] === 'x' ? 't' : 'T';
    return s.join('');
  }

  /**
   * Convert a string like 'rwxr-xr-x' to a mode like 0755
   */
  function toMode(s) {
    var mode = 0;
    for (var i = 0; i < 9; i++) {
      var key;
      switch (i % 3) {
        case 2: key = 'x'; break;
        case 1: key = 'w'; break;
        case 0: key = 'r'; break;
      }
      if (key === s.charAt(i))
        mode |= 1 << (8 - i);
    }

    // special permissions
    switch (s.charAt(8)) {
      case 't': mode |= 1 << 0;
      case 'T': mode |= 1 << 9; break;
    }
    switch (s.charAt(5)) {
      case 's': mode |= 1 << 3;
      case 'S': mode |= 2 << 9; break;
    }
    switch (s.charAt(2)) {
      case 's': mode |= 1 << 6;
      case 'S': mode |= 4 << 9; break;
    }

    return mode;
  }

  global.toString = toString;
  global.toMode = toMode;
}((typeof exports === 'undefined') ? (this.Perms = {}) : exports));

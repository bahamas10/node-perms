(function(global) {
  var SETUID = R = 4;
  var SETGID = W = 2;
  var STICKY = X = 1;
  var string_map = {
    'r': R,
    'w': W,
    'x': X
  };

  /**
   * Convert a mode like '0755' to a string like 'rwxr-xr-x'
   */
  function toString(s) {
    // Grab the 4 fields we care about
    var fields = s.toString().substr(0, 4).split('').reverse();

    // Create an object representing the permissions
    var r = [];
    fields.forEach(function(field, place) {
      switch (place) {
        case 0: case 1: case 2:
          r.push(X & +field ? 'x' : '-');
          r.push(W & +field ? 'w' : '-');
          r.push(R & +field ? 'r' : '-');
          break;
        case 3:
          if (SETUID & +field) r[6] = r[6] === '-' ? 'S' : 's';
          if (SETGID & +field) r[3] = r[3] === '-' ? 'S' : 's';
          if (STICKY & +field) r[0] = r[0] === '-' ? 'T' : 't';
          break;
      }
    });

    return r.reverse().join('');
  }

  /**
   * Convert a string like 'rwxr-xr-x' to a mode like '0755'
   */
  function toMode(s) {
    // Grab the 9 fields we care about
    var fields = s.toString().substr(0, 9).split('').reverse();

    // Create an object representing the permissions
    var r = [0, 0, 0, 0];
    fields.forEach(function(field, place) {
      // figure out value to modify
      var i = r.length - Math.floor(place / 3) - 1;

      var key;
      switch (place % 3) {
        case 0: key = 'x'; break;
        case 1: key = 'w'; break;
        case 2: key = 'r'; break;
      }

      // Bitwise or the value if found
      if (field === key) r[i] = r[i] | string_map[key];
    });

    // Special permissions
    switch (fields[0]) {
      case 't': r[3] = r[3] | X;
      case 'T': r[0] = r[0] | STICKY; break;
    }
    switch (fields[3]) {
      case 's': r[2] = r[2] | X;
      case 'S': r[0] = r[0] | SETGID; break;
    }
    switch (fields[6]) {
      case 's': r[1] = r[1] | X;
      case 'S': r[0] = r[0] | SETUID; break;
    }

    return r.join('');
  }

  global.toString = toString;
  global.toMode = toMode;
}((typeof exports === 'undefined') ? (this.Perms = {}) : exports));

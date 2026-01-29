// Module: F$1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var F$1 = v((_3H, FW7) => {
  FW7.exports = {
    indexOf: function (A, K) {
      var q, Y;
      if (Array.prototype.indexOf) return A.indexOf(K);
      for (q = 0, Y = A.length; q < Y; q++) if (A[q] === K) return q;
      return -1;
    },
    forEach: function (A, K, q) {
      var Y, z;
      if (Array.prototype.forEach) return A.forEach(K, q);
      for (Y = 0, z = A.length; Y < z; Y++) K.call(q, A[Y], Y, A);
    },
    trim: function (A) {
      if (String.prototype.trim) return A.trim();
      return A.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function (A) {
      var K = /\s|\n|\t/,
        q = K.exec(A);
      return q ? q.index : -1;
    }
  };
});

// Register to shared state
__$.F$1 = F$1;

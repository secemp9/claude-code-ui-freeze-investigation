// Module: WM6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WM6 = v((J3H, IW7) => {
  IW7.exports = {
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
    trimRight: function (A) {
      if (String.prototype.trimRight) return A.trimRight();
      return A.replace(/(\s*$)/g, "");
    }
  };
});

// Register to shared state
__$.WM6 = WM6;

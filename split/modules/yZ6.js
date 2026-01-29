// Module: yZ6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yZ6 = v((cew, E27) => {
  E27.exports = function A(K, q) {
    if (K === q) return !0;
    if (K && q && typeof K == "object" && typeof q == "object") {
      if (K.constructor !== q.constructor) return !1;
      var Y, z, w;
      if (Array.isArray(K)) {
        if (Y = K.length, Y != q.length) return !1;
        for (z = Y; z-- !== 0;) if (!A(K[z], q[z])) return !1;
        return !0;
      }
      if (K.constructor === RegExp) return K.source === q.source && K.flags === q.flags;
      if (K.valueOf !== Object.prototype.valueOf) return K.valueOf() === q.valueOf();
      if (K.toString !== Object.prototype.toString) return K.toString() === q.toString();
      if (w = Object.keys(K), Y = w.length, Y !== Object.keys(q).length) return !1;
      for (z = Y; z-- !== 0;) if (!Object.prototype.hasOwnProperty.call(q, w[z])) return !1;
      for (z = Y; z-- !== 0;) {
        var H = w[z];
        if (!A(K[H], q[H])) return !1;
      }
      return !0;
    }
    return K !== K && q !== q;
  };
});

// Register to shared state
__$.yZ6 = yZ6;

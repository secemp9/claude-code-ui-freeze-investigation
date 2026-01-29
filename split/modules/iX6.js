// Module: iX6
// Dependencies: AxA, lX6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iX6 = v(u67 => {
  Object.defineProperty(u67, "__esModule", {
    value: !0
  });
  u67.default = m4Y;
  u67.URL = u67.DNS = void 0;
  var x4Y = h67(__$.AxA()),
    u4Y = h67(__$.lX6());
  function h67(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function B4Y(A) {
    A = unescape(encodeURIComponent(A));
    let K = [];
    for (let q = 0; q < A.length; ++q) K.push(A.charCodeAt(q));
    return K;
  }
  var b67 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  u67.DNS = b67;
  var x67 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  u67.URL = x67;
  function m4Y(A, K, q) {
    function Y(z, w, H, J) {
      if (typeof z === "string") z = B4Y(z);
      if (typeof w === "string") w = (0, u4Y.default)(w);
      if (w.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let O = new Uint8Array(16 + z.length);
      if (O.set(w), O.set(z, w.length), O = q(O), O[6] = O[6] & 15 | K, O[8] = O[8] & 63 | 128, H) {
        J = J || 0;
        for (let X = 0; X < 16; ++X) H[J + X] = O[X];
        return H;
      }
      return (0, x4Y.default)(O);
    }
    try {
      Y.name = A;
    } catch (z) {}
    return Y.DNS = b67, Y.URL = x67, Y;
  }
});

// Register to shared state
__$.iX6 = iX6;

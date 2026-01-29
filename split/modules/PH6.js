// Module: PH6
// Dependencies: HhA, MH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PH6 = v(yn4 => {
  Object.defineProperty(yn4, "__esModule", {
    value: !0
  });
  yn4.URL = yn4.DNS = void 0;
  yn4.default = Po9;
  var Wo9 = __$.HhA(),
    Do9 = jo9(__$.MH6());
  function jo9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function Mo9(A) {
    A = unescape(encodeURIComponent(A));
    let K = [];
    for (let q = 0; q < A.length; ++q) K.push(A.charCodeAt(q));
    return K;
  }
  var Ln4 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  yn4.DNS = Ln4;
  var Rn4 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  yn4.URL = Rn4;
  function Po9(A, K, q) {
    function Y(z, w, H, J) {
      var O;
      if (typeof z === "string") z = Mo9(z);
      if (typeof w === "string") w = (0, Do9.default)(w);
      if (((O = w) === null || O === void 0 ? void 0 : O.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let X = new Uint8Array(16 + z.length);
      if (X.set(w), X.set(z, w.length), X = q(X), X[6] = X[6] & 15 | K, X[8] = X[8] & 63 | 128, H) {
        J = J || 0;
        for (let $ = 0; $ < 16; ++$) H[J + $] = X[$];
        return H;
      }
      return (0, Wo9.unsafeStringify)(X);
    }
    try {
      Y.name = A;
    } catch (z) {}
    return Y.DNS = Ln4, Y.URL = Rn4, Y;
  }
});

// Register to shared state
__$.PH6 = PH6;

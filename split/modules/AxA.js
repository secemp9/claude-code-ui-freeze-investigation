// Module: AxA
// Dependencies: ebA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AxA = v(v67 => {
  Object.defineProperty(v67, "__esModule", {
    value: !0
  });
  v67.default = void 0;
  var T4Y = v4Y(__$.ebA());
  function v4Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var nZ = [];
  for (let A = 0; A < 256; ++A) nZ.push((A + 256).toString(16).substr(1));
  function E4Y(A, K = 0) {
    let q = (nZ[A[K + 0]] + nZ[A[K + 1]] + nZ[A[K + 2]] + nZ[A[K + 3]] + "-" + nZ[A[K + 4]] + nZ[A[K + 5]] + "-" + nZ[A[K + 6]] + nZ[A[K + 7]] + "-" + nZ[A[K + 8]] + nZ[A[K + 9]] + "-" + nZ[A[K + 10]] + nZ[A[K + 11]] + nZ[A[K + 12]] + nZ[A[K + 13]] + nZ[A[K + 14]] + nZ[A[K + 15]]).toLowerCase();
    if (!(0, T4Y.default)(q)) throw TypeError("Stringified UUID is invalid");
    return q;
  }
  var k4Y = E4Y;
  v67.default = k4Y;
});

// Register to shared state
__$.AxA = AxA;

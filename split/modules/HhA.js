// Module: HhA
// Dependencies: whA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HhA = v(Vn4 => {
  Object.defineProperty(Vn4, "__esModule", {
    value: !0
  });
  Vn4.default = void 0;
  Vn4.unsafeStringify = Pn4;
  var Ao9 = Ko9(__$.whA());
  function Ko9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var dZ = [];
  for (let A = 0; A < 256; ++A) dZ.push((A + 256).toString(16).slice(1));
  function Pn4(A, K = 0) {
    return dZ[A[K + 0]] + dZ[A[K + 1]] + dZ[A[K + 2]] + dZ[A[K + 3]] + "-" + dZ[A[K + 4]] + dZ[A[K + 5]] + "-" + dZ[A[K + 6]] + dZ[A[K + 7]] + "-" + dZ[A[K + 8]] + dZ[A[K + 9]] + "-" + dZ[A[K + 10]] + dZ[A[K + 11]] + dZ[A[K + 12]] + dZ[A[K + 13]] + dZ[A[K + 14]] + dZ[A[K + 15]];
  }
  function qo9(A, K = 0) {
    let q = Pn4(A, K);
    if (!(0, Ao9.default)(q)) throw TypeError("Stringified UUID is invalid");
    return q;
  }
  var Yo9 = qo9;
  Vn4.default = Yo9;
});

// Register to shared state
__$.HhA = HhA;

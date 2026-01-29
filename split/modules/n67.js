// Module: n67
// Dependencies: UX6, AxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var n67 = v(l67 => {
  Object.defineProperty(l67, "__esModule", {
    value: !0
  });
  l67.default = void 0;
  var r4Y = c67(__$.UX6()),
    o4Y = c67(__$.AxA());
  function c67(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function a4Y(A, K, q) {
    A = A || {};
    let Y = A.random || (A.rng || r4Y.default)();
    if (Y[6] = Y[6] & 15 | 64, Y[8] = Y[8] & 63 | 128, K) {
      q = q || 0;
      for (let z = 0; z < 16; ++z) K[q + z] = Y[z];
      return K;
    }
    return (0, o4Y.default)(Y);
  }
  var s4Y = a4Y;
  l67.default = s4Y;
});

// Register to shared state
__$.n67 = n67;

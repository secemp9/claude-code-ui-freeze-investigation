// Module: ln4
// Dependencies: Qn4, ZH6, HhA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ln4 = v(dn4 => {
  Object.defineProperty(dn4, "__esModule", {
    value: !0
  });
  dn4.default = void 0;
  var Un4 = pn4(__$.Qn4()),
    ho9 = pn4(__$.ZH6()),
    bo9 = __$.HhA();
  function pn4(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function xo9(A, K, q) {
    if (Un4.default.randomUUID && !K && !A) return Un4.default.randomUUID();
    A = A || {};
    let Y = A.random || (A.rng || ho9.default)();
    if (Y[6] = Y[6] & 15 | 64, Y[8] = Y[8] & 63 | 128, K) {
      q = q || 0;
      for (let z = 0; z < 16; ++z) K[q + z] = Y[z];
      return K;
    }
    return (0, bo9.unsafeStringify)(Y);
  }
  var uo9 = xo9;
  dn4.default = uo9;
});

// Register to shared state
__$.ln4 = ln4;

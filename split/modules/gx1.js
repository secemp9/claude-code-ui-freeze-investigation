// Module: gx1
// Dependencies: MnA, xR1, OZ8, s2A, O1A, $Z8, XG8, SR1, hvq, OG8
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gx1 = k(() => {
  __$.MnA();
  __$.xR1();
  __$.OZ8();
  __$.s2A();
  __$.O1A();
  __$.$Z8();
  __$.XG8();
  __$.SR1();
  __$.hvq = __$.OG8(function (A, K) {
    var q = {};
    if (A == null) return q;
    var Y = !1;
    if (K = __$.o2A(K, function (w) {
      return w = __$.mh(w, A), Y || (Y = w.length > 1), w;
    }), __$.NE(A, __$.tnA(A), q), Y) q = __$.YrA(q, __$.yvq | __$.Ivq | __$.Svq, __$.XZ8);
    var z = K.length;
    while (z--) __$.JZ8(q, K[z]);
    return q;
  }), __$.rwA = __$.hvq;
});

// Register to shared state
__$.gx1 = gx1;

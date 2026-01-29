// Module: Oy7
// Dependencies: xL7, rR7, aR7, tR7, Ky7, wy7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oy7 = v((PDH, Jy7) => {
  var IrY = __$.xL7(),
    SrY = __$.rR7(),
    hrY = __$.aR7(),
    brY = __$.tR7(),
    xrY = __$.Ky7(),
    urY = __$.wy7();
  Jy7.exports = KT6;
  function KT6(A) {
    AT6(this, KT6.defaults), AT6(this, A);
  }
  KT6.defaults = {
    parse: {
      json: IrY,
      yaml: SrY,
      text: hrY,
      binary: brY
    },
    resolve: {
      file: xrY,
      http: urY,
      external: !0
    },
    continueOnError: !1,
    dereference: {
      circular: !0,
      excludedPathMatcher: () => !1
    }
  };
  function AT6(A, K) {
    if (Hy7(K)) {
      let q = Object.keys(K);
      for (let Y = 0; Y < q.length; Y++) {
        let z = q[Y],
          w = K[z],
          H = A[z];
        if (Hy7(w)) A[z] = AT6(H || {}, w);else if (w !== void 0) A[z] = w;
      }
    }
    return A;
  }
  function Hy7(A) {
    return A && typeof A === "object" && !Array.isArray(A) && !(A instanceof RegExp) && !(A instanceof Date);
  }
});

// Register to shared state
__$.Oy7 = Oy7;

// Module: Zg4
// Dependencies: Og4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zg4 = v((ePw, Gg4) => {
  var {
      defineProperty: N21,
      getOwnPropertyDescriptor: qS9,
      getOwnPropertyNames: YS9
    } = Object,
    zS9 = Object.prototype.hasOwnProperty,
    $g4 = (A, K) => N21(A, "name", {
      value: K,
      configurable: !0
    }),
    wS9 = (A, K) => {
      for (var q in K) N21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    HS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of YS9(K)) if (!zS9.call(A, z) && z !== q) N21(A, z, {
          get: () => K[z],
          enumerable: !(Y = qS9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    JS9 = A => HS9(N21({}, "__esModule", {
      value: !0
    }), A),
    _g4 = {};
  wS9(_g4, {
    getSmithyContext: () => OS9,
    normalizeProvider: () => XS9
  });
  Gg4.exports = JS9(_g4);
  var Xg4 = __$.Og4(),
    OS9 = $g4(A => A[Xg4.SMITHY_CONTEXT_KEY] || (A[Xg4.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
    XS9 = $g4(A => {
      if (typeof A === "function") return A;
      let K = Promise.resolve(A);
      return () => K;
    }, "normalizeProvider");
});

// Register to shared state
__$.Zg4 = Zg4;

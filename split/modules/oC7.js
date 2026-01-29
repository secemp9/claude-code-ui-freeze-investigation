// Module: oC7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oC7 = v(nC7 => {
  Object.defineProperty(nC7, "__esModule", {
    value: !0
  });
  nC7.lazyJoinStacks = nC7.joinStacks = nC7.isWritableStack = nC7.isLazyStack = void 0;
  var XcY = /\r?\n/,
    $cY = /\bono[ @]/;
  function _cY(A) {
    return Boolean(A && A.configurable && typeof A.get === "function");
  }
  nC7.isLazyStack = _cY;
  function GcY(A) {
    return Boolean(!A || A.writable || typeof A.set === "function");
  }
  nC7.isWritableStack = GcY;
  function lC7(A, K) {
    let q = iC7(A.stack),
      Y = K ? K.stack : void 0;
    if (q && Y) return q + `

` + Y;else return q || Y;
  }
  nC7.joinStacks = lC7;
  function ZcY(A, K, q) {
    if (q) Object.defineProperty(K, "stack", {
      get: () => {
        let Y = A.get.apply(K);
        return lC7({
          stack: Y
        }, q);
      },
      enumerable: !1,
      configurable: !0
    });else WcY(K, A);
  }
  nC7.lazyJoinStacks = ZcY;
  function iC7(A) {
    if (A) {
      let K = A.split(XcY),
        q;
      for (let Y = 0; Y < K.length; Y++) {
        let z = K[Y];
        if ($cY.test(z)) {
          if (q === void 0) q = Y;
        } else if (q !== void 0) {
          K.splice(q, Y - q);
          break;
        }
      }
      if (K.length > 0) return K.join(`
`);
    }
    return A;
  }
  function WcY(A, K) {
    Object.defineProperty(A, "stack", {
      get: () => iC7(K.get.apply(A)),
      enumerable: !1,
      configurable: !0
    });
  }
});

// Register to shared state
__$.oC7 = oC7;

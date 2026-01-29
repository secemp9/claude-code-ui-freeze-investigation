// Module: Oy6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oy6 = v(q6K => {
  Object.defineProperty(q6K, "__esModule", {
    value: !0
  });
  q6K.backoff = void 0;
  function DZ2(A) {
    var K = Math.random() + 1,
      q = A.minTimeout,
      Y = q === void 0 ? 500 : q,
      z = A.factor,
      w = z === void 0 ? 2 : z,
      H = A.attempt,
      J = A.maxTimeout,
      O = J === void 0 ? 1 / 0 : J;
    return Math.min(K * Y * Math.pow(w, H), O);
  }
  q6K.backoff = DZ2;
});

// Register to shared state
__$.Oy6 = Oy6;

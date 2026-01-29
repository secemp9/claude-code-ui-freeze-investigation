// Module: Uv8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uv8 = v(Qv8 => {
  Object.defineProperty(Qv8, "__esModule", {
    value: !0
  });
  function Itq(A, K, q) {
    let Y = 0,
      z = 5,
      w = 0;
    return setInterval(() => {
      if (w === 0) {
        if (Y > A) {
          if (z *= 2, q(z), z > 86400) z = 86400;
          w = z;
        }
      } else if (w -= 1, w === 0) K();
      Y = 0;
    }, 1000).unref(), () => {
      Y += 1;
    };
  }
  function bm1(A) {
    return A !== void 0 && (A.length === 0 || A === "?" || A === "<anonymous>");
  }
  function Stq(A, K) {
    return A === K || bm1(A) && bm1(K);
  }
  function Fv8(A) {
    if (A === void 0) return;
    return A.slice(-10).reduce((K, q) => `${K},${q.function},${q.lineno},${q.colno}`, "");
  }
  function htq(A, K) {
    if (K === void 0) return;
    return Fv8(A(K, 1));
  }
  Qv8.createRateLimiter = Itq;
  Qv8.functionNamesMatch = Stq;
  Qv8.hashFrames = Fv8;
  Qv8.hashFromStack = htq;
  Qv8.isAnonymous = bm1;
});

// Register to shared state
__$.Uv8 = Uv8;

// Module: gu1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gu1 = v(FD8 => {
  Object.defineProperty(FD8, "__esModule", {
    value: !0
  });
  function nRq() {
    let A = typeof WeakSet === "function",
      K = A ? new WeakSet() : [];
    function q(z) {
      if (A) {
        if (K.has(z)) return !0;
        return K.add(z), !1;
      }
      for (let w = 0; w < K.length; w++) if (K[w] === z) return !0;
      return K.push(z), !1;
    }
    function Y(z) {
      if (A) K.delete(z);else for (let w = 0; w < K.length; w++) if (K[w] === z) {
        K.splice(w, 1);
        break;
      }
    }
    return [q, Y];
  }
  FD8.memoBuilder = nRq;
});

// Register to shared state
__$.gu1 = gu1;

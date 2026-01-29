// Module: jh1
// Dependencies: $7, RoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jh1 = v(M38 => {
  Object.defineProperty(M38, "__esModule", {
    value: !0
  });
  M38.expand = void 0;
  var Szq = __$.$7(),
    hzq = __$.RoA();
  function bzq(A, K, q) {
    if (K === void 0) K = 1 / 0;
    return K = (K || 0) < 1 ? 1 / 0 : K, Szq.operate(function (Y, z) {
      return hzq.mergeInternals(Y, z, A, K, void 0, !0, q);
    });
  }
  M38.expand = bzq;
});

// Register to shared state
__$.jh1 = jh1;

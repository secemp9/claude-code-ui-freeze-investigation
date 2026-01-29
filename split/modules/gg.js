// Module: gg
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gg = v(r48 => {
  Object.defineProperty(r48, "__esModule", {
    value: !0
  });
  r48.executeSchedule = void 0;
  function bKq(A, K, q, Y, z) {
    if (Y === void 0) Y = 0;
    if (z === void 0) z = !1;
    var w = K.schedule(function () {
      if (q(), z) A.add(this.schedule(null, Y));else this.unsubscribe();
    }, Y);
    if (A.add(w), !z) return w;
  }
  r48.executeSchedule = bKq;
});

// Register to shared state
__$.gg = gg;

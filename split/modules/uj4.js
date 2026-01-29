// Module: uj4
// Dependencies: hj4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uj4 = v(bj4 => {
  Object.defineProperty(bj4, "__esModule", {
    value: !0
  });
  bj4.API_BACKWARDS_COMPATIBILITY_VERSION = bj4.makeGetter = bj4._global = bj4.GLOBAL_LOGS_API_KEY = void 0;
  var SK9 = __$.hj4();
  bj4.GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
  bj4._global = SK9._globalThis;
  function hK9(A, K, q) {
    return Y => Y === A ? K : q;
  }
  bj4.makeGetter = hK9;
  bj4.API_BACKWARDS_COMPATIBILITY_VERSION = 1;
});

// Register to shared state
__$.uj4 = uj4;

// Module: ci
// Dependencies: i11, Z1, e6, I8, GJ, R2, n11, UJA, a_, wO5
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ci = k(() => {
  __$.i11();
  __$.Z1();
  __$.e6();
  __$.I8();
  __$.GJ();
  __$.R2();
  __$.n11 = new Map(), __$.UJA = new Set();
  __$.a_ = {
    initialize: __$.wO5,
    dispose: __$.Tx8,
    subscribe: __$.HO5,
    markInternalWrite: __$.JO5,
    notifyChange: __$._O5,
    resetForTesting: __$.GO5
  };
});

// Register to shared state
__$.ci = ci;

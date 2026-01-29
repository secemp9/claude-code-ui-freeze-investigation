// Module: Z_K
// Dependencies: n3, e6, CK, Z1, l1, Gm6, C1, b1, X_K, _F
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z_K = k(() => {
  __$.n3();
  __$.e6();
  __$.CK();
  __$.Z1();
  __$.l1();
  __$.Gm6();
  __$.C1();
  __$.b1();
  __$.b1();
  __$.X_K = o(__$._F(), 1);
  __$.__K = class __K extends Error {
    constructor() {
      super("Download stalled: no data received for 60 seconds");
      this.name = "StallTimeoutError";
    }
  };
});

// Register to shared state
__$.Z_K = Z_K;

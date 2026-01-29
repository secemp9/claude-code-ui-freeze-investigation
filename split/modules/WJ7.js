// Module: WJ7
// Dependencies: AJ7, G_, UuA, ZJ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WJ7 = k(() => {
  __$.AJ7();
  __$.G_();
  __$.UuA();
  __$.ZJ7 = class ZJ7 extends Error {
    constructor(A, K, q) {
      super(`SSE error: ${K}`);
      this.code = A, this.event = q;
    }
  };
});

// Register to shared state
__$.WJ7 = WJ7;

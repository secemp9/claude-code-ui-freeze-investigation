// Module: jJ7
// Dependencies: G_, UuA, DJ7, UDY, DqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jJ7 = k(() => {
  __$.G_();
  __$.UuA();
  __$.DJ7();
  __$.UDY = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  };
  __$.DqA = class DqA extends Error {
    constructor(A, K) {
      super(`Streamable HTTP error: ${K}`);
      this.code = A;
    }
  };
});

// Register to shared state
__$.jJ7 = jJ7;

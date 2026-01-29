// Module: lK6
// Dependencies: cK6, F51, Gr, it3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lK6 = k(() => {
  __$.cK6();
  __$.F51 = class F51 extends __$.Gr {
    keypress;
    key;
    input;
    constructor(A) {
      super();
      let [K, q] = __$.it3(A);
      this.keypress = A, this.key = K, this.input = q;
    }
  };
});

// Register to shared state
__$.lK6 = lK6;

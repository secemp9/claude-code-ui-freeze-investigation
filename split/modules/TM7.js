// Module: TM7
// Dependencies: u_1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TM7 = k(() => {
  __$.u_1 = class u_1 extends Map {
    first;
    last;
    constructor(A) {
      let K = [],
        q,
        Y,
        z,
        w = 0;
      for (let H of A) {
        let J = {
          label: H.label,
          value: H.value,
          description: H.description,
          previous: z,
          next: void 0,
          index: w
        };
        if (z) z.next = J;
        q ||= J, Y = J, K.push([H.value, J]), w++, z = J;
      }
      super(K);
      this.first = q, this.last = Y;
    }
  };
});

// Register to shared state
__$.TM7 = TM7;

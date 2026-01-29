// Module: Au
// Dependencies: C1, Z1, l1, Hu4, s11, M7A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Au = k(() => {
  __$.C1();
  __$.Z1();
  __$.l1();
  __$.Hu4();
  __$.s11();
  __$.M7A = class M7A extends Error {
    constructor(A) {
      super(A);
      this.name = "ImageResizeError";
    }
  };
});

// Register to shared state
__$.Au = Au;

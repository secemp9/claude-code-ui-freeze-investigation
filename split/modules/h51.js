// Module: h51
// Dependencies: Zr, vt3, Gr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h51 = k(() => {
  __$.Zr = class Zr extends __$.vt3 {
    constructor() {
      super();
      this.setMaxListeners(0);
    }
    emit(A, ...K) {
      if (A === "error") return super.emit(A, ...K);
      let q = this.rawListeners(A);
      if (q.length === 0) return !1;
      let Y = K[0] instanceof __$.Gr ? K[0] : null;
      for (let z of q) if (z.apply(this, K), Y?.didStopImmediatePropagation()) break;
      return !0;
    }
  };
});

// Register to shared state
__$.h51 = h51;

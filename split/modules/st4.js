// Module: st4
// Dependencies: Lw1, ChA, MO6, Iw1, yhA, M1Y, PO6, j1Y

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var st4 = k(() => {
  __$.Lw1();
  __$.ChA();
  __$.MO6();
  __$.Iw1();
  __$.yhA();
  __$.M1Y = {};
  __$.PO6 = class PO6 extends __$.j1Y {
    _transform(A, K, q) {
      this.push(A), this.loadedBytes += A.length;
      try {
        this.progressCallback({
          loadedBytes: this.loadedBytes
        }), q();
      } catch (Y) {
        q(Y);
      }
    }
    constructor(A) {
      super();
      this.loadedBytes = 0, this.progressCallback = A;
    }
  };
});

// Register to shared state
__$.st4 = st4;

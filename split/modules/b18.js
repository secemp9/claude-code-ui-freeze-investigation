// Module: b18
// Dependencies: S18, X8q, h18

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b18 = k(() => {
  __$.S18 = class S18 extends __$.X8q.Transform {
    __transform(A, K, q) {
      this.push(A), q();
    }
    _transform(A, K, q) {
      if (A.length !== 0) {
        if (this._transform = this.__transform, A[0] !== 120) {
          let Y = Buffer.alloc(2);
          Y[0] = 120, Y[1] = 156, this.push(Y, K);
        }
      }
      this.__transform(A, K, q);
    }
  };
  __$.h18 = __$.S18;
});

// Register to shared state
__$.b18 = b18;

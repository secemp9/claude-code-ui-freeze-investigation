// Module: TC4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TC4 = v(fC4 => {
  Object.defineProperty(fC4, "__esModule", {
    value: !0
  });
  fC4.callWithTimeout = fC4.TimeoutError = void 0;
  class z91 extends Error {
    constructor(A) {
      super(A);
      Object.setPrototypeOf(this, z91.prototype);
    }
  }
  fC4.TimeoutError = z91;
  function mX9(A, K) {
    let q,
      Y = new Promise(function (w, H) {
        q = setTimeout(function () {
          H(new z91("Operation timed out."));
        }, K);
      });
    return Promise.race([A, Y]).then(z => {
      return clearTimeout(q), z;
    }, z => {
      throw clearTimeout(q), z;
    });
  }
  fC4.callWithTimeout = mX9;
});

// Register to shared state
__$.TC4 = TC4;

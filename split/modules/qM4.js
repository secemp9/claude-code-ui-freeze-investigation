// Module: qM4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qM4 = v(AM4 => {
  Object.defineProperty(AM4, "__esModule", {
    value: !0
  });
  AM4.AnchoredClock = void 0;
  class ej4 {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(A, K) {
      this._monotonicClock = K, this._epochMillis = A.now(), this._performanceMillis = K.now();
    }
    now() {
      let A = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + A;
    }
  }
  AM4.AnchoredClock = ej4;
});

// Register to shared state
__$.qM4 = qM4;

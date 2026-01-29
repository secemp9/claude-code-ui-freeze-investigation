// Module: BE7
// Dependencies: KZ1, If6, DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BE7 = v((j_H, uE7) => {
  var dgY = __$.KZ1(),
    cgY = __$.If6(),
    lgY = __$.DB();
  class xE7 extends dgY {
    constructor(A, K) {
      super(A, K);
      this.posTracker = lgY.install(A, cgY), this.lastErrOffset = -1;
    }
    _reportError(A) {
      if (this.lastErrOffset !== this.posTracker.offset) this.lastErrOffset = this.posTracker.offset, super._reportError(A);
    }
  }
  uE7.exports = xE7;
});

// Register to shared state
__$.BE7 = BE7;

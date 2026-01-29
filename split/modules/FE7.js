// Module: FE7
// Dependencies: KZ1, BE7, DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FE7 = v((M_H, gE7) => {
  var igY = __$.KZ1(),
    ngY = __$.BE7(),
    rgY = __$.DB();
  class mE7 extends igY {
    constructor(A, K) {
      super(A, K);
      let q = rgY.install(A.preprocessor, ngY, K);
      this.posTracker = q.posTracker;
    }
  }
  gE7.exports = mE7;
});

// Register to shared state
__$.FE7 = FE7;

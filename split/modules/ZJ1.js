// Module: ZJ1
// Dependencies: QD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZJ1 = v((umw, b47) => {
  var h47 = __$.QD(),
    dKY = (A, K, q) => {
      let Y = new h47(A, q),
        z = new h47(K, q);
      return Y.compare(z) || Y.compareBuild(z);
    };
  b47.exports = dKY;
});

// Register to shared state
__$.ZJ1 = ZJ1;

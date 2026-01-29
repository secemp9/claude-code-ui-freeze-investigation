// Module: a51
// Dependencies: LD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a51 = v((NYw, N$4) => {
  var f$4 = __$.LD(),
    me3 = (A, K, q) => {
      let Y = new f$4(A, q),
        z = new f$4(K, q);
      return Y.compare(z) || Y.compareBuild(z);
    };
  N$4.exports = me3;
});

// Register to shared state
__$.a51 = a51;

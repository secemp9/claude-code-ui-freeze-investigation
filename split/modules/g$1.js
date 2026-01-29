// Module: g$1
// Dependencies: ZM6, BW7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g$1 = v((m$1, DM6) => {
  var mW7 = __$.ZM6(),
    gW7 = __$.BW7();
  function GCY(A, K) {
    var q = new gW7(K);
    return q.process(A);
  }
  m$1 = DM6.exports = GCY;
  m$1.FilterCSS = gW7;
  for (B$1 in mW7) m$1[B$1] = mW7[B$1];
  var B$1;
  if (typeof window < "u") window.filterCSS = DM6.exports;
});

// Register to shared state
__$.g$1 = g$1;

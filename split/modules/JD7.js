// Module: JD7
// Dependencies: jM6, MM6, qD7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JD7 = v((sZA, c$1) => {
  var YD7 = __$.jM6(),
    zD7 = __$.MM6(),
    wD7 = __$.qD7();
  function HD7(A, K) {
    var q = new wD7(K);
    return q.process(A);
  }
  sZA = c$1.exports = HD7;
  sZA.filterXSS = HD7;
  sZA.FilterXSS = wD7;
  (function () {
    for (var A in YD7) sZA[A] = YD7[A];
    for (var K in zD7) sZA[K] = zD7[K];
  })();
  if (typeof window < "u") window.filterXSS = c$1.exports;
  function PLY() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  if (PLY()) self.filterXSS = c$1.exports;
});

// Register to shared state
__$.JD7 = JD7;

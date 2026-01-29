// Module: QN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QN6 = v((_DH, JR7) => {
  var liY = __$.zj(),
    iiY = Object.prototype.hasOwnProperty;
  function niY(A) {
    if (A === null) return !0;
    var K,
      q = A;
    for (K in q) if (iiY.call(q, K)) {
      if (q[K] !== null) return !1;
    }
    return !0;
  }
  function riY(A) {
    return A !== null ? A : {};
  }
  JR7.exports = new liY("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: niY,
    construct: riY
  });
});

// Register to shared state
__$.QN6 = QN6;

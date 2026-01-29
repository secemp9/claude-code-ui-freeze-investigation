// Module: H$6
// Dependencies: PI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H$6 = v((Mmw, r87) => {
  var wKY = __$.PI1();
  r87.exports = function (A, K) {
    var q = K || Math.floor(Date.now() / 1000);
    if (typeof A === "string") {
      var Y = wKY(A);
      if (typeof Y > "u") return;
      return Math.floor(q + Y / 1000);
    } else if (typeof A === "number") return q + A;else return;
  };
});

// Register to shared state
__$.H$6 = H$6;

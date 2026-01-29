// Module: w$6
// Dependencies: OxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w$6 = v((jmw, n87) => {
  var i87 = __$.OxA(),
    OJ1 = function (A, K) {
      i87.call(this, A), this.name = "TokenExpiredError", this.expiredAt = K;
    };
  OJ1.prototype = Object.create(i87.prototype);
  OJ1.prototype.constructor = OJ1;
  n87.exports = OJ1;
});

// Register to shared state
__$.w$6 = w$6;

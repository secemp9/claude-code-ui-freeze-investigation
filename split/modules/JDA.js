// Module: JDA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JDA = v((nWH, mL7) => {
  function BL7(A, K) {
    var q = "",
      Y = A.reason || "(unknown reason)";
    if (!A.mark) return Y;
    if (A.mark.name) q += 'in "' + A.mark.name + '" ';
    if (q += "(" + (A.mark.line + 1) + ":" + (A.mark.column + 1) + ")", !K && A.mark.snippet) q += `

` + A.mark.snippet;
    return Y + " " + q;
  }
  function smA(A, K) {
    if (Error.call(this), this.name = "YAMLException", this.reason = A, this.mark = K, this.message = BL7(this, !1), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);else this.stack = Error().stack || "";
  }
  smA.prototype = Object.create(Error.prototype);
  smA.prototype.constructor = smA;
  smA.prototype.toString = function (K) {
    return this.name + ": " + BL7(this, K);
  };
  mL7.exports = smA;
});

// Register to shared state
__$.JDA = JDA;

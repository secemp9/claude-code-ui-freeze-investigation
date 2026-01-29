// Module: IA8
// Dependencies: kA8, LA8, sy1, grA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IA8 = v((LGz, yA8) => {
  var N1q = __$.kA8(),
    RA8 = N1q("%Object.defineProperty%", !0),
    T1q = __$.LA8()(),
    v1q = __$.sy1(),
    E1q = __$.grA(),
    crA = T1q ? Symbol.toStringTag : null;
  yA8.exports = function (K, q) {
    var Y = arguments.length > 2 && !!arguments[2] && arguments[2].force,
      z = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof Y < "u" && typeof Y !== "boolean" || typeof z < "u" && typeof z !== "boolean") throw new E1q("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
    if (crA && (Y || !v1q(K, crA))) if (RA8) RA8(K, crA, {
      configurable: !z,
      enumerable: !1,
      value: q,
      writable: !1
    });else K[crA] = q;
  };
});

// Register to shared state
__$.IA8 = IA8;

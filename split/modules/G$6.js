// Module: G$6
// Dependencies: $$6, _$6, _xA, DJ1, WJ1, jJ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G$6 = v((cmw, c47) => {
  var HqY = __$.$$6(),
    JqY = __$._$6(),
    OqY = __$._xA(),
    XqY = __$.DJ1(),
    $qY = __$.WJ1(),
    _qY = __$.jJ1(),
    GqY = (A, K, q, Y) => {
      switch (K) {
        case "===":
          if (typeof A === "object") A = A.version;
          if (typeof q === "object") q = q.version;
          return A === q;
        case "!==":
          if (typeof A === "object") A = A.version;
          if (typeof q === "object") q = q.version;
          return A !== q;
        case "":
        case "=":
        case "==":
          return HqY(A, q, Y);
        case "!=":
          return JqY(A, q, Y);
        case ">":
          return OqY(A, q, Y);
        case ">=":
          return XqY(A, q, Y);
        case "<":
          return $qY(A, q, Y);
        case "<=":
          return _qY(A, q, Y);
        default:
          throw TypeError(`Invalid operator: ${K}`);
      }
    };
  c47.exports = GqY;
});

// Register to shared state
__$.G$6 = G$6;

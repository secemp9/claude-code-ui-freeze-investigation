// Module: eK6
// Dependencies: sK6, tK6, lyA, t51, s51, e51

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eK6 = v((IYw, h$4) => {
  var AA9 = __$.sK6(),
    KA9 = __$.tK6(),
    qA9 = __$.lyA(),
    YA9 = __$.t51(),
    zA9 = __$.s51(),
    wA9 = __$.e51(),
    HA9 = (A, K, q, Y) => {
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
          return AA9(A, q, Y);
        case "!=":
          return KA9(A, q, Y);
        case ">":
          return qA9(A, q, Y);
        case ">=":
          return YA9(A, q, Y);
        case "<":
          return zA9(A, q, Y);
        case "<=":
          return wA9(A, q, Y);
        default:
          throw TypeError(`Invalid operator: ${K}`);
      }
    };
  h$4.exports = HA9;
});

// Register to shared state
__$.eK6 = eK6;

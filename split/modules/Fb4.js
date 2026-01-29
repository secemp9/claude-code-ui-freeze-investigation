// Module: Fb4
// Dependencies: yb4, Sb4, bb4, vY6, ub4, mb4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fb4 = v((Cjw, gb4) => {
  var ZE9 = __$.yb4(),
    WE9 = __$.Sb4(),
    DE9 = __$.bb4(),
    jE9 = __$.vY6(),
    ME9 = __$.ub4(),
    PE9 = __$.mb4(),
    VE9 = (A, K, q, Y) => {
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
          return ZE9(A, q, Y);
        case "!=":
          return WE9(A, q, Y);
        case ">":
          return DE9(A, q, Y);
        case ">=":
          return jE9(A, q, Y);
        case "<":
          return ME9(A, q, Y);
        case "<=":
          return PE9(A, q, Y);
        default:
          throw TypeError(`Invalid operator: ${K}`);
      }
    };
  gb4.exports = VE9;
});

// Register to shared state
__$.Fb4 = Fb4;

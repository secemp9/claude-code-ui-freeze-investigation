// Module: D26
// Dependencies: vB4, CB4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D26 = v(yB4 => {
  Object.defineProperty(yB4, "__esModule", {
    value: !0
  });
  yB4.toUtf8 = yB4.fromUtf8 = void 0;
  var LB4 = __$.vB4(),
    RB4 = __$.CB4(),
    lR9 = A => typeof TextEncoder === "function" ? (0, RB4.fromUtf8)(A) : (0, LB4.fromUtf8)(A);
  yB4.fromUtf8 = lR9;
  var iR9 = A => typeof TextDecoder === "function" ? (0, RB4.toUtf8)(A) : (0, LB4.toUtf8)(A);
  yB4.toUtf8 = iR9;
});

// Register to shared state
__$.D26 = D26;

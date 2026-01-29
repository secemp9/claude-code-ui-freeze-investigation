// Module: ftA
// Dependencies: BvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ftA = v(jN8 => {
  Object.defineProperty(jN8, "__esModule", {
    value: !0
  });
  var siq = __$.BvA(),
    tiq = () => {
      let A = siq.getNavigationEntry();
      return A && A.activationStart || 0;
    };
  jN8.getActivationStart = tiq;
});

// Register to shared state
__$.ftA = ftA;

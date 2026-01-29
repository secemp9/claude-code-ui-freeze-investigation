// Module: hu1
// Dependencies: YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hu1 = v(ND8 => {
  Object.defineProperty(ND8, "__esModule", {
    value: !0
  });
  var HRq = __$.YD(),
    WsA = HRq.getGlobalObject();
  function JRq() {
    let A = WsA.chrome,
      K = A && A.app && A.app.runtime,
      q = "history" in WsA && !!WsA.history.pushState && !!WsA.history.replaceState;
    return !K && q;
  }
  ND8.supportsHistory = JRq;
});

// Register to shared state
__$.hu1 = hu1;

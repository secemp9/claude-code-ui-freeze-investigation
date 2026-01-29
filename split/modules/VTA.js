// Module: VTA
// Dependencies: Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VTA = v(v48 => {
  Object.defineProperty(v48, "__esModule", {
    value: !0
  });
  v48.isScheduler = void 0;
  var n7q = __$.Hz();
  function r7q(A) {
    return A && n7q.isFunction(A.schedule);
  }
  v48.isScheduler = r7q;
});

// Register to shared state
__$.VTA = VTA;

// Module: DM4
// Dependencies: s56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DM4 = v(ZM4 => {
  Object.defineProperty(ZM4, "__esModule", {
    value: !0
  });
  ZM4.globalErrorHandler = ZM4.setGlobalErrorHandler = void 0;
  var Wq9 = __$.s56(),
    GM4 = (0, Wq9.loggingErrorHandler)();
  function Dq9(A) {
    GM4 = A;
  }
  ZM4.setGlobalErrorHandler = Dq9;
  function jq9(A) {
    try {
      GM4(A);
    } catch {}
  }
  ZM4.globalErrorHandler = jq9;
});

// Register to shared state
__$.DM4 = DM4;

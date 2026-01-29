// Module: Vv1
// Dependencies: cA, g4, mA, FWK, $A, Dg2, eA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vv1 = k(() => {
  __$.cA();
  __$.g4();
  __$.mA();
  __$.FWK = o(__$.$A(), 1), __$.Dg2 = {
    success: {
      icon: __$.eA.tick,
      color: "success"
    },
    error: {
      icon: __$.eA.cross,
      color: "error"
    },
    warning: {
      icon: __$.eA.warning,
      color: "warning"
    },
    info: {
      icon: __$.eA.info,
      color: "suggestion"
    },
    pending: {
      icon: __$.eA.circle,
      color: void 0
    },
    loading: {
      icon: "…",
      color: void 0
    }
  };
});

// Register to shared state
__$.Vv1 = Vv1;

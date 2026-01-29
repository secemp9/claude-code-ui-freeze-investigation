// Module: xGK
// Dependencies: Bm6, hGK, $A, RB2, aT1, bGK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xGK = k(() => {
  __$.Bm6();
  __$.hGK = o(__$.$A(), 1), __$.RB2 = {
    name: "doctor",
    description: "Diagnose and verify your Claude Code installation and settings",
    isEnabled: () => !process.env.DISABLE_DOCTOR_COMMAND,
    isHidden: !1,
    userFacingName() {
      return "doctor";
    },
    type: "local-jsx",
    call(A, K, q) {
      return new Promise(Y => Y(__$.hGK.default.createElement(__$.aT1, {
        onDone: A
      })));
    }
  }, __$.bGK = __$.RB2;
});

// Register to shared state
__$.xGK = xGK;

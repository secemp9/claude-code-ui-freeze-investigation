// Module: _G1
// Dependencies: z7, kp, yp, $8, PmA, VmA, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _G1 = k(() => {
  __$.z7();
  __$.kp();
  __$.yp();
  __$.$8();
  __$.PmA();
  __$.VmA = __$.U.object({
    ok: __$.U.boolean().describe("Whether the condition was met"),
    reason: __$.U.string().describe("Reason, if the condition was not met").optional()
  });
});

// Register to shared state
__$._G1 = _G1;

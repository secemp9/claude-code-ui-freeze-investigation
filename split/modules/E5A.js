// Module: E5A
// Dependencies: S2, aZ1, t9, NT, $8, Z1, z7, Qy7, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E5A = k(() => {
  __$.S2();
  __$.aZ1();
  __$.t9();
  __$.NT();
  __$.$8();
  __$.Z1();
  __$.z7();
  __$.Qy7 = __$.U.object({
    status: __$.U.literal("sub_agent_entered"),
    description: __$.U.string(),
    message: __$.U.string()
  });
});

// Register to shared state
__$.E5A = E5A;

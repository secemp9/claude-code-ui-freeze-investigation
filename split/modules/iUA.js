// Module: iUA
// Dependencies: Z1, l1, q6, b1, yf1, ewK, Sk2, zx6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iUA = k(() => {
  __$.Z1();
  __$.l1();
  __$.q6();
  __$.b1();
  __$.yf1 = process.env.CLAUDE_CODE_PROFILE_STARTUP === "1", __$.ewK = Math.random() < __$.Sk2, __$.zx6 = __$.yf1 || __$.ewK;
});

// Register to shared state
__$.iUA = iUA;

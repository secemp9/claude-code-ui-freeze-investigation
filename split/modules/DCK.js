// Module: DCK
// Dependencies: ie, WE1, XYA, YAz, OYA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DCK = k(() => {
  __$.ie();
  __$.WE1();
  __$.XYA();
  __$.YAz = __$.OYA.map(A => `mcp__claude-in-chrome__${A.name}`);
});

// Register to shared state
__$.DCK = DCK;

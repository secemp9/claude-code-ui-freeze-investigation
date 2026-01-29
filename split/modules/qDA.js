// Module: qDA
// Dependencies: xG, iw, Z1, S2, $8, Pa, VI2, fI2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qDA = k(() => {
  __$.xG();
  __$.iw();
  __$.Z1();
  __$.S2();
  __$.$8();
  __$.Pa();
  __$.VI2 = /```!\s*\n?([\s\S]*?)\n?```/g, __$.fI2 = /(?<!\w|\$)!`([^`]+)`/g;
});

// Register to shared state
__$.qDA = qDA;

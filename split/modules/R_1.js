// Module: R_1
// Dependencies: lqA, rM, cI, Z1, C1, UK, Tf, R2, Jz, wz
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R_1 = k(() => {
  __$.lqA();
  __$.rM();
  __$.cI();
  __$.Z1();
  __$.C1();
  __$.UK();
  __$.Tf();
  __$.R2();
  __$.Jz();
  __$.wz();
  __$.KyY = {
    agentType: "main-session",
    whenToUse: "Main session query",
    source: "userSettings",
    getSystemPrompt: () => ""
  };
});

// Register to shared state
__$.R_1 = R_1;

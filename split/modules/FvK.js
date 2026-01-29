// Module: FvK
// Dependencies: $8, sz, K7, b1, Z1, gvK, l6, JHO, mvK, Ra2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FvK = k(() => {
  __$.$8();
  __$.sz();
  __$.K7();
  __$.b1();
  __$.Z1();
  __$.gvK();
  __$.l6();
  __$.JHO = __$.mvK({
    toolName: __$.Ra2,
    description: "Report the security classification result for the agent action",
    primaryField: {
      name: "shouldBlock",
      description: "Whether the action should be blocked (true) or allowed (false)"
    }
  });
});

// Register to shared state
__$.FvK = FvK;

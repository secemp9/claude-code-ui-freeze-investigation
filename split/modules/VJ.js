// Module: VJ
// Dependencies: b1, l6, q6, z7, C1, Z1, W2, NT, MyA, Yb
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VJ = k(() => {
  __$.b1();
  __$.l6();
  __$.q6();
  __$.l6();
  __$.z7();
  __$.C1();
  __$.Z1();
  __$.b1();
  __$.W2();
  __$.NT();
  __$.MyA = o(__$.Yb(), 1), __$.O76 = new Set();
  __$.z4A = __$.U.enum(["pending", "in_progress", "completed"]), __$.Ia3 = __$.U.object({
    id: __$.U.string(),
    subject: __$.U.string(),
    description: __$.U.string(),
    activeForm: __$.U.string().optional(),
    owner: __$.U.string().optional(),
    status: __$.z4A,
    blocks: __$.U.array(__$.U.string()),
    blockedBy: __$.U.array(__$.U.string()),
    metadata: __$.U.record(__$.U.string(), __$.U.unknown()).optional()
  });
});

// Register to shared state
__$.VJ = VJ;

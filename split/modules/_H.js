// Module: _H
// Dependencies: b1, z7, C1, wz, Z1, W2, VJ, AMA, Yb, g4K
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _H = k(() => {
  __$.b1();
  __$.z7();
  __$.C1();
  __$.wz();
  __$.Z1();
  __$.W2();
  __$.VJ();
  __$.b1();
  __$.AMA = o(__$.Yb(), 1);
  __$.g4K = __$.U.object({
    type: __$.U.literal("mode_set_request"),
    targetMode: __$.U.string(),
    from: __$.U.string(),
    timestamp: __$.U.string()
  });
});

// Register to shared state
__$._H = _H;

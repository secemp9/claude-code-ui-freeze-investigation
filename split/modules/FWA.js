// Module: FWA
// Dependencies: z7, l1, B7, Z1, dmY, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FWA = k(() => {
  __$.z7();
  __$.l1();
  __$.B7();
  __$.Z1();
  __$.dmY = __$.U.object({
    method: __$.U.literal("log_event"),
    params: __$.U.object({
      eventName: __$.U.string(),
      eventData: __$.U.object({}).passthrough()
    })
  });
});

// Register to shared state
__$.FWA = FWA;

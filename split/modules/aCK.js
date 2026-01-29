// Module: aCK
// Dependencies: z7, l1, iH, rCK, $A, mAz, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aCK = k(() => {
  __$.z7();
  __$.l1();
  __$.iH();
  __$.rCK = o(__$.$A(), 1), __$.mAz = __$.U.object({
    method: __$.U.literal("log_event"),
    params: __$.U.object({
      eventName: __$.U.string(),
      eventData: __$.U.object({}).passthrough()
    })
  });
});

// Register to shared state
__$.aCK = aCK;

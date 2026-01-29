// Module: gvK
// Dependencies: z7, rwO, U, La2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gvK = k(() => {
  __$.z7();
  __$.rwO = __$.U.object({
    matches: __$.U.boolean(),
    matchedDescription: __$.U.string().optional(),
    confidence: __$.U.enum(["high", "medium", "low"]),
    reason: __$.U.string()
  }), __$.La2 = __$.U.object({
    shouldBlock: __$.U.boolean(),
    matchedDescription: __$.U.string().optional(),
    confidence: __$.U.enum(["high", "medium", "low"]),
    reason: __$.U.string()
  });
});

// Register to shared state
__$.gvK = gvK;

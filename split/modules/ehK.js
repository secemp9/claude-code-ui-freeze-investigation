// Module: ehK
// Dependencies: cA, z7, YC1, $A, PFO, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ehK = k(() => {
  __$.cA();
  __$.z7();
  __$.YC1 = o(__$.$A(), 1), __$.PFO = __$.U.object({
    method: __$.U.literal("notifications/message"),
    params: __$.U.object({
      prompt: __$.U.string(),
      image: __$.U.object({
        type: __$.U.literal("base64"),
        media_type: __$.U.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]),
        data: __$.U.string()
      }).optional(),
      tabId: __$.U.number().optional()
    })
  });
});

// Register to shared state
__$.ehK = ehK;

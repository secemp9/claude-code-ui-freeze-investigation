// Module: syK
// Dependencies: z7, iH, C1, uk1, $A, t8z, U, s8z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var syK = k(() => {
  __$.z7();
  __$.iH();
  __$.C1();
  __$.uk1 = o(__$.$A(), 1), __$.t8z = __$.U.object({
    method: __$.U.literal(__$.s8z),
    params: __$.U.object({
      filePath: __$.U.string(),
      lineStart: __$.U.number().optional(),
      lineEnd: __$.U.number().optional()
    })
  });
});

// Register to shared state
__$.syK = syK;

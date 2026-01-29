// Module: fhK
// Dependencies: z7, iH, C1, wlA, $A, y7z, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fhK = k(() => {
  __$.z7();
  __$.iH();
  __$.C1();
  __$.wlA = o(__$.$A(), 1), __$.y7z = __$.U.object({
    method: __$.U.literal("selection_changed"),
    params: __$.U.object({
      selection: __$.U.object({
        start: __$.U.object({
          line: __$.U.number(),
          character: __$.U.number()
        }),
        end: __$.U.object({
          line: __$.U.number(),
          character: __$.U.number()
        })
      }).nullable().optional(),
      text: __$.U.string().optional(),
      filePath: __$.U.string().optional()
    })
  });
});

// Register to shared state
__$.fhK = fhK;

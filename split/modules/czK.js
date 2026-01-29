// Module: czK
// Dependencies: z7, pzK, eb6, dzK, i6, I8, l1, C1, b1, oJ1
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var czK = k(() => {
  __$.z7();
  __$.pzK();
  __$.eb6();
  __$.dzK();
  __$.i6();
  __$.I8();
  __$.l1();
  __$.C1();
  __$.b1();
  __$.oJ1();
  __$.y8J = __$.U.strictObject({
    setting: __$.U.string().describe('The setting key (e.g., "theme", "model", "permissions.defaultMode")'),
    value: __$.U.union([__$.U.string(), __$.U.boolean(), __$.U.number()]).optional().describe("The new value. Omit to get current value.")
  }), __$.I8J = __$.U.object({
    success: __$.U.boolean(),
    operation: __$.U.enum(["get", "set"]).optional(),
    setting: __$.U.string().optional(),
    value: __$.U.unknown().optional(),
    previousValue: __$.U.unknown().optional(),
    newValue: __$.U.unknown().optional(),
    error: __$.U.string().optional()
  });
});

// Register to shared state
__$.czK = czK;

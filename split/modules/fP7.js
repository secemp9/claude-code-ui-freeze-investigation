// Module: fP7
// Dependencies: z7, lHH, f7, KG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fP7 = k(() => {
  __$.z7();
  __$.lHH = __$.f7.enum(["allow", "deny", "ask"]), __$.KG1 = __$.f7.object({
    toolName: __$.f7.string(),
    ruleContent: __$.f7.string().optional()
  });
});

// Register to shared state
__$.fP7 = fP7;

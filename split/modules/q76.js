// Module: q76
// Dependencies: z7, ka3, U, Ca3, HXA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q76 = k(() => {
  __$.z7();
  __$.ka3 = __$.U.enum(["pending", "in_progress", "completed"]), __$.Ca3 = __$.U.object({
    content: __$.U.string().min(1, "Content cannot be empty"),
    status: __$.ka3,
    activeForm: __$.U.string().min(1, "Active form cannot be empty")
  }), __$.HXA = __$.U.array(__$.Ca3);
});

// Register to shared state
__$.q76 = q76;

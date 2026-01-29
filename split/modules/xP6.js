// Module: xP6
// Dependencies: z7, fP7, n_, EWA, f7, qG1, KG1, pR8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xP6 = k(() => {
  __$.z7();
  __$.fP7();
  __$.n_();
  __$.EWA = __$.f7.enum(["userSettings", "projectSettings", "localSettings", "session", "cliArg"]), __$.qG1 = __$.f7.discriminatedUnion("type", [__$.f7.object({
    type: __$.f7.literal("addRules"),
    rules: __$.f7.array(__$.KG1),
    behavior: __$.f7.enum(["allow", "deny", "ask"]),
    destination: __$.EWA
  }), __$.f7.object({
    type: __$.f7.literal("replaceRules"),
    rules: __$.f7.array(__$.KG1),
    behavior: __$.f7.enum(["allow", "deny", "ask"]),
    destination: __$.EWA
  }), __$.f7.object({
    type: __$.f7.literal("removeRules"),
    rules: __$.f7.array(__$.KG1),
    behavior: __$.f7.enum(["allow", "deny", "ask"]),
    destination: __$.EWA
  }), __$.f7.object({
    type: __$.f7.literal("setMode"),
    mode: __$.pR8,
    destination: __$.EWA
  }), __$.f7.object({
    type: __$.f7.literal("addDirectories"),
    directories: __$.f7.array(__$.f7.string()),
    destination: __$.EWA
  }), __$.f7.object({
    type: __$.f7.literal("removeDirectories"),
    directories: __$.f7.array(__$.f7.string()),
    destination: __$.EWA
  })]);
});

// Register to shared state
__$.xP6 = xP6;

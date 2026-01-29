// Module: _MA
// Dependencies: b1, z7, C1, Z1, _H, W2, AM2, Yb, YlH, U

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _MA = k(() => {
  __$.b1();
  __$.z7();
  __$.C1();
  __$.Z1();
  __$._H();
  __$.W2();
  __$.b1();
  __$.AM2 = o(__$.Yb(), 1), __$.YlH = __$.U.object({
    id: __$.U.string(),
    workerId: __$.U.string(),
    workerName: __$.U.string(),
    workerColor: __$.U.string().optional(),
    teamName: __$.U.string(),
    toolName: __$.U.string(),
    toolUseId: __$.U.string(),
    description: __$.U.string(),
    input: __$.U.record(__$.U.string(), __$.U.unknown()),
    permissionSuggestions: __$.U.array(__$.U.unknown()),
    status: __$.U.enum(["pending", "approved", "rejected"]),
    resolvedBy: __$.U.enum(["worker", "leader"]).optional(),
    resolvedAt: __$.U.number().optional(),
    feedback: __$.U.string().optional(),
    updatedInput: __$.U.unknown().optional(),
    permissionUpdates: __$.U.array(__$.U.unknown()).optional(),
    createdAt: __$.U.number()
  });
});

// Register to shared state
__$._MA = _MA;

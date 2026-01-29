// Module: Mc6
// Dependencies: z7, xP6, LH, C50, f7, B5z, qG1, m5z, SC1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mc6 = k(() => {
  __$.z7();
  __$.xP6();
  __$.LH();
  __$.C50 = __$.f7.object({
    tool_name: __$.f7.string().describe("The name of the tool requesting permission"),
    input: __$.f7.record(__$.f7.string(), __$.f7.unknown()).describe("The input for the tool"),
    tool_use_id: __$.f7.string().optional().describe("The unique tool use request ID")
  }), __$.B5z = __$.f7.object({
    behavior: __$.f7.literal("allow"),
    updatedInput: __$.f7.record(__$.f7.string(), __$.f7.unknown()),
    updatedPermissions: __$.f7.array(__$.qG1).optional(),
    toolUseID: __$.f7.string().optional()
  }), __$.m5z = __$.f7.object({
    behavior: __$.f7.literal("deny"),
    message: __$.f7.string(),
    interrupt: __$.f7.boolean().optional(),
    toolUseID: __$.f7.string().optional()
  }), __$.SC1 = __$.f7.union([__$.B5z, __$.m5z]);
});

// Register to shared state
__$.Mc6 = Mc6;

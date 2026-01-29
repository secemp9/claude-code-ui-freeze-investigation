// Module: uP6
// Dependencies: z7, j$A, xP6, myY, U, gyY, qG1, YG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uP6 = k(() => {
  __$.z7();
  __$.j$A();
  __$.xP6();
  __$.myY = __$.U.object({
    async: __$.U.literal(!0),
    asyncTimeout: __$.U.number().optional()
  }), __$.gyY = __$.U.object({
    continue: __$.U.boolean().describe("Whether Claude should continue after hook (default: true)").optional(),
    suppressOutput: __$.U.boolean().describe("Hide stdout from transcript (default: false)").optional(),
    stopReason: __$.U.string().describe("Message shown when continue is false").optional(),
    decision: __$.U.enum(["approve", "block"]).optional(),
    reason: __$.U.string().describe("Explanation for the decision").optional(),
    systemMessage: __$.U.string().describe("Warning message shown to the user").optional(),
    hookSpecificOutput: __$.U.union([__$.U.object({
      hookEventName: __$.U.literal("PreToolUse"),
      permissionDecision: __$.U.enum(["allow", "deny", "ask"]).optional(),
      permissionDecisionReason: __$.U.string().optional(),
      updatedInput: __$.U.record(__$.U.string(), __$.U.unknown()).optional(),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("UserPromptSubmit"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("SessionStart"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("Setup"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("SubagentStart"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("PostToolUse"),
      additionalContext: __$.U.string().optional(),
      updatedMCPToolOutput: __$.U.unknown().describe("Updates the output for MCP tools").optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("PostToolUseFailure"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("Notification"),
      additionalContext: __$.U.string().optional()
    }), __$.U.object({
      hookEventName: __$.U.literal("PermissionRequest"),
      decision: __$.U.union([__$.U.object({
        behavior: __$.U.literal("allow"),
        updatedInput: __$.U.record(__$.U.string(), __$.U.unknown()).optional(),
        updatedPermissions: __$.U.array(__$.qG1).optional()
      }), __$.U.object({
        behavior: __$.U.literal("deny"),
        message: __$.U.string().optional(),
        interrupt: __$.U.boolean().optional()
      })])
    })]).optional()
  }), __$.YG1 = __$.U.union([__$.myY, __$.gyY]);
});

// Register to shared state
__$.uP6 = uP6;

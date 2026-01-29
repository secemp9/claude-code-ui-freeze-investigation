// Module: rb6
// Dependencies: z7, LH, q6, bzK, FzK, Ak2, U, Kk2, QUA, lZ1
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rb6 = k(() => {
  __$.z7();
  __$.LH();
  __$.q6();
  __$.bzK();
  __$.FzK();
  __$.Ak2 = __$.U.strictObject({}), __$.Kk2 = __$.U.object({
    message: __$.U.string().describe("Confirmation that plan mode was entered")
  }), __$.QUA = {
    name: __$.lZ1,
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return __$.hzK();
    },
    inputSchema: __$.Ak2,
    outputSchema: __$.Kk2,
    userFacingName() {
      return "";
    },
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.xzK,
    renderToolUseProgressMessage: __$.uzK,
    renderToolResultMessage: __$.BzK,
    renderToolUseRejectedMessage: __$.mzK,
    renderToolUseErrorMessage: __$.gzK,
    async call(A, K) {
      if (K.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
      let q = await K.getAppState();
      return __$.Qh(q.toolPermissionContext.mode, "plan"), K.setAppState(Y => ({
        ...Y,
        toolPermissionContext: __$.nY(Y.toolPermissionContext, {
          type: "setMode",
          mode: "plan",
          destination: "session"
        })
      })), {
        data: {
          message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      message: A
    }, K) {
      return {
        type: "tool_result",
        content: `${A}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use AskUserQuestion if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ExitPlanMode to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: K
      };
    }
  };
});

// Register to shared state
__$.rb6 = rb6;

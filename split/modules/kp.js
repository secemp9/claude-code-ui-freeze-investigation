// Module: kp
// Dependencies: z7, b1, Fj7, h01, sRY, U, tRY, qP6, bG, UA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kp = k(() => {
  __$.z7();
  __$.b1();
  __$.Fj7 = o(__$.h01(), 1), __$.sRY = __$.U.object({}).passthrough(), __$.tRY = __$.U.string().describe("Structured output tool result");
  __$.qP6 = {
    isMcp: !1,
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    isDestructive() {
      return !1;
    },
    isOpenWorld() {
      return !1;
    },
    name: __$.bG,
    maxResultSizeChars: 1e5,
    async description() {
      return "Return structured output in the requested format";
    },
    async prompt() {
      return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output.";
    },
    inputSchema: __$.sRY,
    outputSchema: __$.tRY,
    async call(A) {
      return {
        data: "Structured output provided successfully",
        structured_output: A
      };
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage(A) {
      let K = Object.keys(A);
      if (K.length === 0) return null;
      if (K.length <= 3) return K.map(q => `${q}: ${__$.UA(A[q])}`).join(", ");
      return `${K.length} fields: ${K.slice(0, 3).join(", ")}…`;
    },
    userFacingName: () => __$.bG,
    renderToolUseRejectedMessage() {
      return "Structured output rejected";
    },
    renderToolUseErrorMessage() {
      return "Structured output error";
    },
    renderToolUseProgressMessage() {
      return null;
    },
    renderToolResultMessage(A) {
      return A;
    },
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: A
      };
    }
  };
});

// Register to shared state
__$.kp = kp;

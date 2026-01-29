// Module: JW7
// Dependencies: z7, $M6, pkY, U, dkY, HW7, UZ7, QZ7, qW7, YW7
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JW7 = k(() => {
  __$.z7();
  __$.$M6();
  __$.pkY = __$.U.object({}).passthrough(), __$.dkY = __$.U.string().describe("MCP tool execution result"), __$.HW7 = {
    isMcp: !0,
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    isDestructive() {
      return !1;
    },
    isOpenWorld() {
      return !1;
    },
    name: "mcp",
    maxResultSizeChars: 1e5,
    async description() {
      return __$.UZ7;
    },
    async prompt() {
      return __$.QZ7;
    },
    inputSchema: __$.pkY,
    outputSchema: __$.dkY,
    async call() {
      return {
        data: ""
      };
    },
    async checkPermissions() {
      return {
        behavior: "passthrough",
        message: "MCPTool requires permission."
      };
    },
    renderToolUseMessage: __$.qW7,
    userFacingName: () => "mcp",
    renderToolUseRejectedMessage: __$.YW7,
    renderToolUseErrorMessage: __$.zW7,
    renderToolUseProgressMessage: __$.wW7,
    renderToolResultMessage: __$.S$1,
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
__$.JW7 = JW7;

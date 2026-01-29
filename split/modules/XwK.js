// Module: XwK
// Dependencies: z7, VJ, Xk2, U, $k2, z4A, OwK, iZ1, KwK, qwK
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XwK = k(() => {
  __$.z7();
  __$.VJ();
  __$.Xk2 = __$.U.strictObject({
    taskId: __$.U.string().describe("The ID of the task to retrieve")
  }), __$.$k2 = __$.U.object({
    task: __$.U.object({
      id: __$.U.string(),
      subject: __$.U.string(),
      description: __$.U.string(),
      status: __$.z4A,
      blocks: __$.U.array(__$.U.string()),
      blockedBy: __$.U.array(__$.U.string())
    }).nullable()
  }), __$.OwK = {
    name: __$.iZ1,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.KwK;
    },
    async prompt() {
      return __$.qwK;
    },
    inputSchema: __$.Xk2,
    outputSchema: __$.$k2,
    userFacingName() {
      return "TaskGet";
    },
    isEnabled() {
      return __$.ew();
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
    renderToolUseMessage: __$.YwK,
    renderToolUseProgressMessage: __$.zwK,
    renderToolUseRejectedMessage: __$.wwK,
    renderToolUseErrorMessage: __$.HwK,
    renderToolResultMessage: __$.JwK,
    async call({
      taskId: A
    }) {
      let K = __$.JM(),
        q = __$.kQ(K, A);
      if (!q) return {
        data: {
          task: null
        }
      };
      return {
        data: {
          task: {
            id: q.id,
            subject: q.subject,
            description: q.description,
            status: q.status,
            blocks: q.blocks,
            blockedBy: q.blockedBy
          }
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let {
        task: q
      } = A;
      if (!q) return {
        tool_use_id: K,
        type: "tool_result",
        content: "Task not found",
        is_error: !0
      };
      let Y = [`Task #${q.id}: ${q.subject}`, `Status: ${q.status}`, `Description: ${q.description}`];
      if (q.blockedBy.length > 0) Y.push(`Blocked by: ${q.blockedBy.map(z => `#${z}`).join(", ")}`);
      if (q.blocks.length > 0) Y.push(`Blocks: ${q.blocks.map(z => `#${z}`).join(", ")}`);
      return {
        tool_use_id: K,
        type: "tool_result",
        content: Y.join(`
`)
      };
    }
  };
});

// Register to shared state
__$.XwK = XwK;

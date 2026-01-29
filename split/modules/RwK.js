// Module: RwK
// Dependencies: z7, NwK, VJ, Wk2, U, Dk2, z4A, LwK, nZ1, VwK
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RwK = k(() => {
  __$.z7();
  __$.NwK();
  __$.VJ();
  __$.Wk2 = __$.U.strictObject({}), __$.Dk2 = __$.U.object({
    tasks: __$.U.array(__$.U.object({
      id: __$.U.string(),
      subject: __$.U.string(),
      status: __$.z4A,
      owner: __$.U.string().optional(),
      blockedBy: __$.U.array(__$.U.string())
    }))
  }), __$.LwK = {
    name: __$.nZ1,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.VwK;
    },
    async prompt() {
      return __$.fwK();
    },
    inputSchema: __$.Wk2,
    outputSchema: __$.Dk2,
    userFacingName() {
      return "TaskList";
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
    renderToolUseMessage: __$.TwK,
    renderToolUseProgressMessage: __$.vwK,
    renderToolUseRejectedMessage: __$.EwK,
    renderToolUseErrorMessage: __$.kwK,
    renderToolResultMessage: __$.CwK,
    async call() {
      let A = __$.JM(),
        K = __$.OG(A),
        q = new Set(K.filter(z => z.status === "completed").map(z => z.id));
      return {
        data: {
          tasks: K.map(z => ({
            id: z.id,
            subject: z.subject,
            status: z.status,
            owner: z.owner,
            blockedBy: z.blockedBy.filter(w => !q.has(w))
          }))
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let {
        tasks: q
      } = A;
      if (q.length === 0) return {
        tool_use_id: K,
        type: "tool_result",
        content: "No tasks found"
      };
      let Y = q.map(z => {
        let w = z.owner ? ` (${z.owner})` : "",
          H = z.blockedBy.length > 0 ? ` [blocked by ${z.blockedBy.map(J => `#${J}`).join(", ")}]` : "";
        return `#${z.id} [${z.status}] ${z.subject}${w}${H}`;
      });
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
__$.RwK = RwK;

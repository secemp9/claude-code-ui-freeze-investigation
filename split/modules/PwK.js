// Module: PwK
// Dependencies: z7, VJ, t9, W2, _H, _k2, z4A, U, Gk2, Zk2
//   ... and 21 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PwK = k(() => {
  __$.z7();
  __$.VJ();
  __$.t9();
  __$.W2();
  __$._H();
  __$._k2 = __$.z4A.or(__$.U.literal("deleted")), __$.Gk2 = __$.U.strictObject({
    taskId: __$.U.string().describe("The ID of the task to update"),
    subject: __$.U.string().optional().describe("New subject for the task"),
    description: __$.U.string().optional().describe("New description for the task"),
    activeForm: __$.U.string().optional().describe('Present continuous form shown in spinner when in_progress (e.g., "Running tests")'),
    status: __$._k2.optional().describe("New status for the task"),
    addBlocks: __$.U.array(__$.U.string()).optional().describe("Task IDs that this task blocks"),
    addBlockedBy: __$.U.array(__$.U.string()).optional().describe("Task IDs that block this task"),
    owner: __$.U.string().optional().describe("New owner for the task"),
    metadata: __$.U.record(__$.U.string(), __$.U.unknown()).optional().describe("Metadata keys to merge into the task. Set a key to null to delete it.")
  }), __$.Zk2 = __$.U.object({
    success: __$.U.boolean(),
    taskId: __$.U.string(),
    updatedFields: __$.U.array(__$.U.string()),
    error: __$.U.string().optional(),
    statusChange: __$.U.object({
      from: __$.U.string(),
      to: __$.U.string()
    }).optional()
  }), __$.MwK = {
    name: __$.tU,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.$wK;
    },
    async prompt() {
      return __$._wK;
    },
    inputSchema: __$.Gk2,
    outputSchema: __$.Zk2,
    userFacingName() {
      return "TaskUpdate";
    },
    isEnabled() {
      return __$.ew();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !1;
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.GwK,
    renderToolUseProgressMessage: __$.ZwK,
    renderToolUseRejectedMessage: __$.WwK,
    renderToolUseErrorMessage: __$.DwK,
    renderToolResultMessage: __$.jwK,
    async call({
      taskId: A,
      subject: K,
      description: q,
      activeForm: Y,
      status: z,
      owner: w,
      addBlocks: H,
      addBlockedBy: J,
      metadata: O
    }, X) {
      let $ = __$.JM();
      X.setAppState(W => {
        if (W.showExpandedTodos) return W;
        return {
          ...W,
          showExpandedTodos: !0
        };
      });
      let _ = __$.kQ($, A);
      if (!_) return {
        data: {
          success: !1,
          taskId: A,
          updatedFields: [],
          error: "Task not found"
        }
      };
      let G = [],
        Z = {};
      if (K !== void 0 && K !== _.subject) Z.subject = K, G.push("subject");
      if (q !== void 0 && q !== _.description) Z.description = q, G.push("description");
      if (Y !== void 0 && Y !== _.activeForm) Z.activeForm = Y, G.push("activeForm");
      if (w !== void 0 && w !== _.owner) Z.owner = w, G.push("owner");
      if (__$.b8() && z === "in_progress" && w === void 0 && !_.owner) {
        let W = __$.b9();
        if (W) Z.owner = W, G.push("owner");
      }
      if (O !== void 0) {
        let W = {
          ...(_.metadata ?? {})
        };
        for (let [D, j] of Object.entries(O)) if (j === null) delete W[D];else W[D] = j;
        Z.metadata = W, G.push("metadata");
      }
      if (z !== void 0) {
        if (z === "deleted") {
          let W = __$.nq1($, A);
          return {
            data: {
              success: W,
              taskId: A,
              updatedFields: W ? ["deleted"] : [],
              error: W ? void 0 : "Failed to delete task",
              statusChange: W ? {
                from: _.status,
                to: "deleted"
              } : void 0
            }
          };
        }
        if (z !== _.status) Z.status = z, G.push("status");
      }
      if (Object.keys(Z).length > 0) __$.Ey($, A, Z);
      if (Z.owner && __$.b8()) {
        let W = __$.b9() || "team-lead",
          D = __$.PJ(),
          j = JSON.stringify({
            type: "task_assignment",
            taskId: A,
            subject: _.subject,
            description: _.description,
            assignedBy: W,
            timestamp: new Date().toISOString()
          });
        __$.Q3(Z.owner, {
          from: W,
          text: j,
          timestamp: new Date().toISOString(),
          color: D
        }, $);
      }
      if (H && H.length > 0) {
        let W = H.filter(D => !_.blocks.includes(D));
        for (let D of W) __$._76($, A, D);
        if (W.length > 0) G.push("blocks");
      }
      if (J && J.length > 0) {
        let W = J.filter(D => !_.blockedBy.includes(D));
        for (let D of W) __$._76($, D, A);
        if (W.length > 0) G.push("blockedBy");
      }
      return {
        data: {
          success: !0,
          taskId: A,
          updatedFields: G,
          statusChange: Z.status !== void 0 ? {
            from: _.status,
            to: Z.status
          } : void 0
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let {
        success: q,
        taskId: Y,
        updatedFields: z,
        error: w,
        statusChange: H
      } = A;
      if (!q) return {
        tool_use_id: K,
        type: "tool_result",
        content: w || `Task #${Y} not found`,
        is_error: !0
      };
      let J = `Updated task #${Y} ${z.join(", ")}`;
      if (H?.to === "completed" && __$.q_() && __$.b8()) J += `

Task completed. Call TaskList now to find your next available task or see if your work unblocked others.`;
      return {
        tool_use_id: K,
        type: "tool_result",
        content: J
      };
    }
  };
});

// Register to shared state
__$.PwK = PwK;

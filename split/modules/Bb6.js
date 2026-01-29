// Module: Bb6
// Dependencies: z7, mb6, F2K, b1, GE2, U, ZE2, Mf1, JgA, uUA
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bb6 = k(() => {
  __$.z7();
  __$.mb6();
  __$.F2K();
  __$.b1();
  __$.GE2 = __$.U.strictObject({
    task_id: __$.U.string().optional().describe("The ID of the background task to stop"),
    shell_id: __$.U.string().optional().describe("Deprecated: use task_id instead")
  }), __$.ZE2 = __$.U.object({
    message: __$.U.string().describe("Status message about the operation"),
    task_id: __$.U.string().describe("The ID of the task that was stopped"),
    task_type: __$.U.string().describe("The type of the task that was stopped")
  }), __$.Mf1 = {
    name: __$.JgA,
    aliases: ["KillShell"],
    maxResultSizeChars: 1e5,
    userFacingName: () => "Stop Task",
    inputSchema: __$.GE2,
    outputSchema: __$.ZE2,
    isEnabled() {
      return !0;
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
    async validateInput({
      task_id: A,
      shell_id: K
    }, {
      getAppState: q
    }) {
      let Y = A ?? K;
      if (!Y) return {
        result: !1,
        message: "Missing required parameter: task_id",
        errorCode: 1
      };
      let w = (await q()).tasks?.[Y];
      if (!w) return {
        result: !1,
        message: `No task found with ID: ${Y}`,
        errorCode: 1
      };
      if (!__$.uUA(w.type)) return {
        result: !1,
        message: `Task ${Y} has unsupported type: ${w.type}`,
        errorCode: 2
      };
      if (w.status !== "running") return {
        result: !1,
        message: `Task ${Y} is not running (status: ${w.status})`,
        errorCode: 3
      };
      return {
        result: !0
      };
    },
    async description() {
      return "Stop a running background task by ID";
    },
    async prompt() {
      return __$.Fy7;
    },
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: __$.UA(A)
      };
    },
    renderToolUseMessage: __$.x2K,
    renderToolUseProgressMessage: __$.u2K,
    renderToolUseRejectedMessage: __$.B2K,
    renderToolUseErrorMessage: __$.m2K,
    renderToolResultMessage: __$.g2K,
    async call({
      task_id: A,
      shell_id: K
    }, {
      getAppState: q,
      setAppState: Y,
      abortController: z
    }) {
      let w = A ?? K;
      if (!w) throw Error("Missing required parameter: task_id");
      let J = (await q()).tasks?.[w];
      if (!J) throw Error(`No task found with ID: ${w}`);
      if (J.status !== "running") throw Error(`Task ${w} is not running, so cannot be stopped (status: ${J.status})`);
      let O = __$.uUA(J.type);
      if (!O) throw Error(`Unsupported task type: ${J.type}`);
      return await O.kill(w, {
        abortController: z,
        getAppState: q,
        setAppState: Y
      }), Y(X => {
        let $ = X.tasks[w];
        if (!$ || $.notified) return X;
        return {
          ...X,
          tasks: {
            ...X.tasks,
            [w]: {
              ...$,
              notified: !0
            }
          }
        };
      }), {
        data: {
          message: `Successfully stopped task: ${w} (${J.description})`,
          task_id: w,
          task_type: J.type
        }
      };
    }
  };
});

// Register to shared state
__$.Bb6 = Bb6;

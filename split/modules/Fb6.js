// Module: Fb6
// Dependencies: cA, z7, mA, iw, __, J0, Eq, rM, cI, HP1
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fb6 = k(() => {
  __$.cA();
  __$.z7();
  __$.mA();
  __$.iw();
  __$.__();
  __$.J0();
  __$.Eq();
  __$.rM();
  __$.cI();
  __$.HP1();
  __$.vP1();
  __$.b1();
  __$.gb6();
  __$.Vz();
  __$.w9 = o(__$.$A(), 1), __$.DE2 = __$.U.strictObject({
    task_id: __$.U.string().describe("The task ID to get output from"),
    block: __$.U.boolean().default(!0).describe("Whether to wait for completion"),
    timeout: __$.U.number().min(0).max(600000).default(30000).describe("Max wait time in ms")
  });
  __$.Vf1 = {
    name: __$.YDA,
    maxResultSizeChars: 1e5,
    aliases: ["AgentOutputTool", "BashOutputTool"],
    userFacingName() {
      return "Task Output";
    },
    inputSchema: __$.DE2,
    async description() {
      return "Retrieves output from a running or completed task";
    },
    isConcurrencySafe(A) {
      return this.isReadOnly(A);
    },
    isEnabled() {
      return !0;
    },
    isReadOnly(A) {
      return !0;
    },
    async checkPermissions(A, K) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    async prompt() {
      return `- Retrieves output from a running or completed task (background shell, agent, or remote session)
- Takes a task_id parameter identifying the task
- Returns the task output along with status information
- Use block=true (default) to wait for task completion
- Use block=false for non-blocking check of current status
- Task IDs can be found using the /tasks command
- Works with all task types: background shells, async agents, and remote sessions`;
    },
    async validateInput({
      task_id: A
    }, {
      getAppState: K
    }) {
      if (!A) return {
        result: !1,
        message: "Task ID is required",
        errorCode: 1
      };
      if (!(await K()).tasks?.[A]) return {
        result: !1,
        message: `No task found with ID: ${A}`,
        errorCode: 2
      };
      return {
        result: !0
      };
    },
    async call(A, K, q, Y, z) {
      let {
          task_id: w,
          block: H,
          timeout: J
        } = A,
        X = (await K.getAppState()).tasks?.[w];
      if (!X) throw Error(`No task found with ID: ${w}`);
      if (!H) {
        if (X.status !== "running" && X.status !== "pending") return __$.eY(w, K.setAppState, _ => ({
          ..._,
          notified: !0
        })), {
          data: {
            retrieval_status: "success",
            task: __$.Pf1(X)
          }
        };
        return {
          data: {
            retrieval_status: "not_ready",
            task: __$.Pf1(X)
          }
        };
      }
      if (z) z({
        toolUseID: `task-output-waiting-${Date.now()}`,
        data: {
          type: "waiting_for_task",
          taskDescription: X.description,
          taskType: X.type
        }
      });
      let $ = await __$.jE2(w, K.getAppState, J, K.abortController);
      if (!$) return {
        data: {
          retrieval_status: "timeout",
          task: null
        }
      };
      if ($.status === "running" || $.status === "pending") return {
        data: {
          retrieval_status: "timeout",
          task: __$.Pf1($)
        }
      };
      return __$.eY(w, K.setAppState, _ => ({
        ..._,
        notified: !0
      })), {
        data: {
          retrieval_status: "success",
          task: __$.Pf1($)
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let q = [];
      if (q.push(`<retrieval_status>${A.retrieval_status}</retrieval_status>`), A.task) {
        if (q.push(`<task_id>${A.task.task_id}</task_id>`), q.push(`<task_type>${A.task.task_type}</task_type>`), q.push(`<status>${A.task.status}</status>`), A.task.exitCode !== void 0 && A.task.exitCode !== null) q.push(`<exit_code>${A.task.exitCode}</exit_code>`);
        if (A.task.output?.trim()) {
          let {
            content: Y
          } = __$.BUA(A.task.output, A.task.task_id);
          q.push(`<output>
${Y.trimEnd()}
</output>`);
        }
        if (A.task.error) q.push(`<error>${A.task.error}</error>`);
      }
      return {
        tool_use_id: K,
        type: "tool_result",
        content: q.join(`

`)
      };
    },
    renderToolUseMessage(A) {
      let {
        block: K = !0
      } = A;
      if (!K) return "non-blocking";
      return "";
    },
    renderToolUseTag(A) {
      if (!A.task_id) return null;
      return __$.w9.default.createElement(__$.V, {
        dimColor: !0
      }, " ", A.task_id);
    },
    renderToolUseProgressMessage(A) {
      let q = A[A.length - 1]?.data;
      return __$.w9.default.createElement(__$.S, {
        flexDirection: "column"
      }, q?.taskDescription && __$.w9.default.createElement(__$.V, null, "  ", q.taskDescription), __$.w9.default.createElement(__$.V, null, "     Waiting for task", " ", __$.w9.default.createElement(__$.V, {
        dimColor: !0
      }, "(esc to give additional instructions)")));
    },
    renderToolResultMessage(A, K, {
      verbose: q,
      theme: Y
    }) {
      return __$.w9.default.createElement(__$.ME2, {
        content: A,
        verbose: q,
        theme: Y
      });
    },
    renderToolUseRejectedMessage() {
      return __$.w9.default.createElement(__$.u9, null);
    },
    renderToolUseErrorMessage(A, {
      verbose: K
    }) {
      return __$.w9.default.createElement(__$.C3, {
        result: A,
        verbose: K
      });
    }
  };
});

// Register to shared state
__$.Fb6 = Fb6;

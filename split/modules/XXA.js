// Module: XXA
// Dependencies: z7, KJ4, q76, q6, VJ, ua3, U, HXA, Ba3, o0
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XXA = k(() => {
  __$.z7();
  __$.KJ4();
  __$.q76();
  __$.q6();
  __$.VJ();
  __$.ua3 = __$.U.strictObject({
    todos: __$.HXA.describe("The updated todo list")
  }), __$.Ba3 = __$.U.object({
    oldTodos: __$.HXA.describe("The todo list before the update"),
    newTodos: __$.HXA.describe("The todo list after the update")
  }), __$.o0 = {
    name: __$.EQ,
    maxResultSizeChars: 1e5,
    strict: !0,
    input_examples: [{
      todos: [{
        content: "Fix the login bug",
        status: "pending",
        activeForm: "Fixing the login bug"
      }]
    }, {
      todos: [{
        content: "Implement feature",
        status: "completed",
        activeForm: "Implementing feature"
      }, {
        content: "Write unit tests",
        status: "in_progress",
        activeForm: "Writing unit tests"
      }]
    }],
    async description() {
      return __$.AJ4;
    },
    async prompt() {
      return __$.eH4;
    },
    inputSchema: __$.ua3,
    outputSchema: __$.Ba3,
    userFacingName() {
      return "";
    },
    isEnabled() {
      return !__$.ew();
    },
    isConcurrencySafe() {
      return !1;
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
    renderToolUseMessage: __$.qJ4,
    renderToolUseProgressMessage: __$.YJ4,
    renderToolUseRejectedMessage: __$.zJ4,
    renderToolUseErrorMessage: __$.wJ4,
    renderToolResultMessage: __$.HJ4,
    async call({
      todos: A
    }, K) {
      let q = await K.getAppState(),
        Y = K.agentId ?? __$.d1(),
        z = q.todos[Y] ?? [],
        w = A.every(H => H.status === "completed") ? [] : A;
      return K.setAppState(H => ({
        ...H,
        todos: {
          ...H.todos,
          [Y]: w
        }
      })), {
        data: {
          oldTodos: z,
          newTodos: A
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable"
      };
    }
  };
});

// Register to shared state
__$.XXA = XXA;

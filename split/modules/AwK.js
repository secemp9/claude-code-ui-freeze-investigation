// Module: AwK
// Dependencies: z7, nzK, VJ, Jk2, U, Ok2, ezK, Aa, lzK, izK
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AwK = k(() => {
  __$.z7();
  __$.nzK();
  __$.VJ();
  __$.Jk2 = __$.U.strictObject({
    subject: __$.U.string().describe("A brief title for the task"),
    description: __$.U.string().describe("A detailed description of what needs to be done"),
    activeForm: __$.U.string().optional().describe('Present continuous form shown in spinner when in_progress (e.g., "Running tests")'),
    metadata: __$.U.record(__$.U.string(), __$.U.unknown()).optional().describe("Arbitrary metadata to attach to the task")
  }), __$.Ok2 = __$.U.object({
    task: __$.U.object({
      id: __$.U.string(),
      subject: __$.U.string()
    })
  }), __$.ezK = {
    name: __$.Aa,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.lzK;
    },
    async prompt() {
      return __$.izK();
    },
    inputSchema: __$.Jk2,
    outputSchema: __$.Ok2,
    userFacingName() {
      return "TaskCreate";
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
    renderToolUseMessage: __$.rzK,
    renderToolUseProgressMessage: __$.ozK,
    renderToolUseRejectedMessage: __$.azK,
    renderToolUseErrorMessage: __$.szK,
    renderToolResultMessage: __$.tzK,
    async call({
      subject: A,
      description: K,
      activeForm: q,
      metadata: Y
    }, z) {
      let w = __$.OXA(__$.JM(), {
        subject: A,
        description: K,
        activeForm: q,
        status: "pending",
        owner: void 0,
        blocks: [],
        blockedBy: [],
        metadata: Y
      });
      return z.setAppState(H => {
        if (H.showExpandedTodos) return H;
        return {
          ...H,
          showExpandedTodos: !0
        };
      }), {
        data: {
          task: {
            id: w,
            subject: A
          }
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let {
        task: q
      } = A;
      return {
        tool_use_id: K,
        type: "tool_result",
        content: `Task #${q.id} created successfully: ${q.subject}`
      };
    }
  };
});

// Register to shared state
__$.AwK = AwK;

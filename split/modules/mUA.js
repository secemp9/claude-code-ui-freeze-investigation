// Module: mUA
// Dependencies: z7, t2K, NG, b1, t9, W2, _H, KzK, sMA, LH
//   ... and 32 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mUA = k(() => {
  __$.z7();
  __$.t2K();
  __$.NG();
  __$.b1();
  __$.t9();
  __$.W2();
  __$._H();
  __$.KzK();
  __$.sMA();
  __$.LH();
  __$.q6();
  __$.kE2 = __$.U.object({
    tool: __$.U.enum(["Bash"]).describe("The tool this prompt applies to"),
    prompt: __$.U.string().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')
  }), __$.qzK = __$.U.strictObject({
    allowedPrompts: __$.U.array(__$.kE2).optional().describe("Prompt-based permissions needed to implement the plan. These describe categories of actions rather than specific commands."),
    pushToRemote: __$.U.boolean().optional().describe("Whether to push the plan to a remote Claude.ai session"),
    remoteSessionId: __$.U.string().optional().describe("The remote session ID if pushed to remote"),
    remoteSessionUrl: __$.U.string().optional().describe("The remote session URL if pushed to remote"),
    remoteSessionTitle: __$.U.string().optional().describe("The remote session title if pushed to remote")
  }).passthrough(), __$.N1J = __$.qzK.extend({
    plan: __$.U.string().optional().describe("The plan content (injected by normalizeToolInput from disk)")
  }), __$.CE2 = __$.U.object({
    plan: __$.U.string().nullable().describe("The plan that was presented to the user"),
    isAgent: __$.U.boolean(),
    filePath: __$.U.string().optional().describe("The file path where the plan was saved"),
    pushToRemote: __$.U.boolean().optional().describe("Whether the plan was pushed to a remote session"),
    remoteSessionId: __$.U.string().optional().describe("The remote session ID"),
    remoteSessionUrl: __$.U.string().optional().describe("The remote session URL"),
    hasTaskTool: __$.U.boolean().optional().describe("Whether the Task tool is available in the current context"),
    awaitingLeaderApproval: __$.U.boolean().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),
    requestId: __$.U.string().optional().describe("Unique identifier for the plan approval request")
  }), __$.SW = {
    name: __$.Yf,
    maxResultSizeChars: 1e5,
    async description() {
      return "Prompts the user to exit plan mode and start coding";
    },
    async prompt() {
      return __$.i2K;
    },
    inputSchema: __$.qzK,
    outputSchema: __$.CE2,
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
      return !1;
    },
    requiresUserInteraction() {
      if (__$.m2()) return !1;
      return !0;
    },
    async checkPermissions(A) {
      if (__$.m2()) return {
        behavior: "allow",
        updatedInput: A
      };
      return {
        behavior: "ask",
        message: "Exit plan mode?",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.n2K,
    renderToolUseProgressMessage: __$.r2K,
    renderToolResultMessage: __$.o2K,
    renderToolUseRejectedMessage: __$.a2K,
    renderToolUseErrorMessage: __$.s2K,
    async call(A, K) {
      let q = !!K.agentId,
        Y = __$.uM(K.agentId),
        z = __$.fG(K.agentId);
      if (__$.m2() && __$.jyA()) {
        if (!z) throw Error(`No plan file found at ${Y}. Please write your plan to this file before calling ExitPlanMode.`);
        let H = __$.b9() || "unknown",
          J = __$.T3(),
          O = __$.bt("plan_approval", __$.cf(H, J || "default")),
          X = {
            type: "plan_approval_request",
            from: H,
            timestamp: new Date().toISOString(),
            planFilePath: Y,
            planContent: z,
            requestId: O
          };
        __$.Q3("team-lead", {
          from: H,
          text: __$.UA(X),
          timestamp: new Date().toISOString()
        }, J);
        let $ = await K.getAppState(),
          _ = __$.e2K(H, $);
        if (_) __$.AzK(_, K.setAppState, !0);
        return {
          data: {
            plan: z,
            isAgent: !0,
            filePath: Y,
            awaitingLeaderApproval: !0,
            requestId: O
          }
        };
      }
      if (A.pushToRemote && A.remoteSessionId) __$.gUA({
        session: {
          id: A.remoteSessionId,
          title: A.remoteSessionTitle || "Remote task"
        },
        command: z || "",
        context: K
      });
      K.setAppState(H => {
        if (H.toolPermissionContext.mode !== "plan") return H;
        return __$.VE(!0), __$.xg(!0), {
          ...H,
          toolPermissionContext: __$.nY(H.toolPermissionContext, {
            type: "setMode",
            mode: "default",
            destination: "session"
          })
        };
      });
      let w = __$.b8() && K.options.tools.some(H => H.name === __$.Nq);
      return {
        data: {
          plan: z,
          isAgent: q,
          filePath: Y,
          pushToRemote: A.pushToRemote,
          remoteSessionId: A.remoteSessionId,
          remoteSessionUrl: A.remoteSessionUrl,
          hasTaskTool: w || void 0
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      isAgent: A,
      plan: K,
      filePath: q,
      pushToRemote: Y,
      remoteSessionId: z,
      remoteSessionUrl: w,
      hasTaskTool: H,
      awaitingLeaderApproval: J,
      requestId: O
    }, X) {
      if (Y && z) return {
        type: "tool_result",
        content: "Plan pushed to remote session. The URL is already displayed to the user, so do not repeat it.",
        tool_use_id: X
      };
      if (J) return {
        type: "tool_result",
        content: `Your plan has been submitted to the team lead for approval.

Plan file: ${q}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${O}`,
        tool_use_id: X
      };
      if (A) return {
        type: "tool_result",
        content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
        tool_use_id: X
      };
      if (!K || K.trim() === "") return {
        type: "tool_result",
        content: "User has approved exiting plan mode. You can now proceed.",
        tool_use_id: X
      };
      return {
        type: "tool_result",
        content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${q}
You can refer back to it if needed during implementation.${H ? `

If this plan can be broken down into multiple independent tasks, consider using a team of teammates (via the Task tool with team_name) to parallelize the work.` : ""}

## Approved Plan:
${K}`,
        tool_use_id: X
      };
    }
  };
});

// Register to shared state
__$.mUA = mUA;

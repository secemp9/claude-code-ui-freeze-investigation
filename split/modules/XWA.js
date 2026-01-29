// Module: XWA
// Dependencies: mA, lqA, Jz, R2, Tf, cI, rM, UK, XB, kp
//   ... and 16 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XWA = k(() => {
  __$.mA();
  __$.lqA();
  __$.Jz();
  __$.R2();
  __$.Tf();
  __$.cI();
  __$.rM();
  __$.UK();
  __$.XB();
  __$.kp();
  __$.wz();
  __$.Cp = o(__$.$A(), 1);
  __$.L_1 = {
    name: "LocalAgentTask",
    type: "local_agent",
    async spawn(A, K) {
      let {
          prompt: q,
          description: Y,
          agentType: z,
          model: w,
          selectedAgent: H,
          agentId: J
        } = A,
        {
          setAppState: O
        } = K,
        X = J ?? __$.Ep("local_agent");
      __$.HWA(X, __$.$B(__$.oD(X)));
      let $ = __$.e7(),
        _ = {
          ...__$.oM(X, "local_agent", Y),
          type: "local_agent",
          status: "running",
          agentId: X,
          prompt: q,
          selectedAgent: H,
          agentType: z,
          model: w,
          abortController: $,
          retrieved: !1,
          lastReportedToolCount: 0,
          lastReportedTokenCount: 0,
          isBackgrounded: !0
        },
        G = __$.kK(async () => {
          __$.nqA(X, O);
        });
      return _.unregisterCleanup = G, __$.aM(_, O), {
        taskId: X,
        cleanup: () => {
          G(), $.abort();
        }
      };
    },
    async kill(A, K) {
      __$.nqA(A, K.setAppState);
    },
    renderStatus(A) {
      let K = A,
        q = K.status,
        Y = K.description,
        z = K.progress,
        w = q === "running" ? "warning" : q === "completed" ? "success" : q === "failed" ? "error" : "inactive",
        H = z ? ` (${z.toolUseCount} tools, ${z.tokenCount} tokens)` : "";
      return __$.Cp.createElement(__$.S, null, __$.Cp.createElement(__$.V, {
        color: w
      }, "[", q, "] ", Y, H));
    },
    renderOutput(A) {
      return __$.Cp.createElement(__$.S, null, __$.Cp.createElement(__$.V, null, A));
    },
    getProgressMessage(A) {
      let K = A,
        q = K.progress;
      if (!q) return null;
      let Y = q.toolUseCount - K.lastReportedToolCount,
        z = q.tokenCount - K.lastReportedTokenCount;
      if (Y === 0 && z === 0) return null;
      let w = [];
      if (Y > 0) w.push(`${Y} new tool${Y > 1 ? "s" : ""} used`);
      if (z > 0) w.push(`${z} new tokens`);
      return `Agent ${A.id} progress: ${w.join(", ")}. The agent is still running. You usually do not need to read ${A.outputFile} unless you need specific details right away. You will receive a notification when the agent is done.`;
    }
  };
  __$.C_1 = new Map();
});

// Register to shared state
__$.XWA = XWA;

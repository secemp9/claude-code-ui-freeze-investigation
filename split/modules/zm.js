// Module: zm
// Dependencies: mA, Tf, cI, rM, wz, gP1, $8, Z1, Ld, $A
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zm = k(() => {
  __$.mA();
  __$.Tf();
  __$.cI();
  __$.rM();
  __$.wz();
  __$.gP1();
  __$.$8();
  __$.Z1();
  __$.Ld = o(__$.$A(), 1), __$.FP1 = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async spawn(A, K) {
      let q = {
          name: A.name,
          teamName: A.teamName,
          prompt: A.prompt,
          color: A.color,
          planModeRequired: A.planModeRequired
        },
        Y = await __$.XMA(q, {
          setAppState: K.setAppState
        });
      if (!Y.success || !Y.taskId) throw Error(Y.error || "Failed to spawn in-process teammate");
      return {
        taskId: Y.taskId,
        cleanup: () => {
          Y.abortController?.abort();
        }
      };
    },
    async kill(A, K) {
      __$.mP1(A, K.setAppState);
    },
    renderStatus(A) {
      if (!__$.W_(A)) return null;
      let {
          status: K,
          identity: q,
          progress: Y,
          awaitingPlanApproval: z,
          isIdle: w
        } = A,
        H = K === "running" ? z ? "warning" : "success" : K === "completed" ? "success" : K === "failed" ? "error" : K === "killed" ? "error" : "inactive",
        J = K;
      if (K === "running" && w) J = "idle";else if (K === "running" && z) J = "awaiting approval";
      let O = Y ? ` (${Y.toolUseCount} tools, ${Y.tokenCount} tokens)` : "";
      return __$.Ld.createElement(__$.S, null, __$.Ld.createElement(__$.V, {
        color: H
      }, "[", J, "] ", q.agentName, "@", q.teamName, O));
    },
    renderOutput(A) {
      return __$.Ld.createElement(__$.S, null, __$.Ld.createElement(__$.V, null, A));
    },
    getProgressMessage(A) {
      if (!__$.W_(A)) return null;
      let {
        progress: K,
        lastReportedToolCount: q,
        lastReportedTokenCount: Y,
        identity: z
      } = A;
      if (!K) return null;
      let w = K.toolUseCount - q,
        H = K.tokenCount - Y;
      if (w === 0 && H === 0) return null;
      let J = [];
      if (w > 0) J.push(`${w} new tool${w > 1 ? "s" : ""} used`);
      if (H > 0) J.push(`${H} new tokens`);
      return `Teammate ${z.agentName} progress: ${J.join(", ")}. Read ${A.outputFile} for output.`;
    }
  };
});

// Register to shared state
__$.zm = zm;

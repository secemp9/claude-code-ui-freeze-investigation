// Module: sMA
// Dependencies: mA, lqA, C1, Z1, Tf, cI, rM, Ud, sz, $8
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sMA = k(() => {
  __$.mA();
  __$.lqA();
  __$.C1();
  __$.Z1();
  __$.Tf();
  __$.cI();
  __$.rM();
  __$.Ud();
  __$.sz();
  __$.$8();
  __$.XXA();
  __$.DJK();
  __$.b1();
  __$.wz();
  __$.pd = o(__$.$A(), 1);
  __$.jJK = {
    name: "RemoteAgentTask",
    type: "remote_agent",
    async spawn(A, K) {
      let {
          command: q,
          title: Y
        } = A,
        {
          abortController: z
        } = K;
      __$.h(`RemoteAgentTask spawning: ${Y}`);
      let w = await __$.W9A({
        initialMessage: q,
        description: Y,
        signal: z.signal
      });
      if (!w) throw Error("Failed to create remote session");
      let {
        taskId: H,
        cleanup: J
      } = __$.gUA({
        session: {
          id: w.id,
          title: w.title || Y
        },
        command: q,
        context: K
      });
      return {
        taskId: H,
        cleanup: J
      };
    },
    async kill(A, K) {
      __$.eY(A, K.setAppState, q => {
        if (q.status !== "running") return q;
        return {
          ...q,
          status: "killed",
          endTime: Date.now()
        };
      }), __$.h(`RemoteAgentTask ${A} marked as killed (local only)`);
    },
    renderStatus(A) {
      let K = A,
        q = K.status,
        Y = K.title;
      return __$.pd.createElement(__$.S, null, __$.pd.createElement(__$.V, {
        color: q === "running" ? "warning" : q === "completed" ? "success" : q === "failed" ? "error" : "inactive"
      }, "[", q, "] ", Y));
    },
    renderOutput(A) {
      return __$.pd.createElement(__$.S, null, __$.pd.createElement(__$.V, null, A));
    },
    getProgressMessage(A) {
      let q = A.deltaSummarySinceLastFlushToAttachment;
      if (!q) return null;
      return `Remote task ${A.id} progress: ${q}. Read ${A.outputFile} to see full output.`;
    }
  };
});

// Register to shared state
__$.sMA = sMA;

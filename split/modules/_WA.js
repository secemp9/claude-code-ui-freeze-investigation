// Module: _WA
// Dependencies: mA, lqA, R2, C1, Z1, Tf, cI, rM, XWA, R_1
//   ... and 16 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _WA = k(() => {
  __$.mA();
  __$.lqA();
  __$.R2();
  __$.C1();
  __$.Z1();
  __$.Tf();
  __$.cI();
  __$.rM();
  __$.XWA();
  __$.R_1();
  __$.wz();
  __$.Lp = o(__$.$A(), 1);
  __$.$WA = {
    name: "LocalBashTask",
    type: "local_bash",
    async spawn(A, K) {
      let {
          command: q,
          description: Y,
          shellCommand: z
        } = A,
        {
          setAppState: w
        } = K,
        H = __$.Ep("local_bash");
      __$.wWA(H);
      let J = __$.kK(async () => {
          __$.JP6(H, w);
        }),
        O = {
          ...__$.oM(H, "local_bash", Y),
          type: "local_bash",
          status: "running",
          command: q,
          completionStatusSentInAttachment: !1,
          shellCommand: z,
          unregisterCleanup: J,
          stdoutLineCount: 0,
          stderrLineCount: 0,
          lastReportedStdoutLines: 0,
          lastReportedStderrLines: 0,
          isBackgrounded: !0
        };
      __$.aM(O, w);
      let X = z.background(H);
      if (!X) return z.result.then($ => {
        z.cleanup();
        let _ = $.code === 0 ? "completed" : "failed";
        __$.eY(H, w, G => ({
          ...G,
          status: _,
          result: {
            code: $.code,
            interrupted: $.interrupted
          },
          endTime: Date.now()
        })), __$.$mA(H, Y, _, $.code, w);
      }), {
        taskId: H
      };
      return X.stdoutStream.on("data", $ => {
        let _ = $.toString();
        __$.cqA(H, _);
        let G = _.split(`
`).filter(Z => Z.length > 0).length;
        __$.eY(H, w, Z => ({
          ...Z,
          stdoutLineCount: Z.stdoutLineCount + G
        }));
      }), X.stderrStream.on("data", $ => {
        let _ = $.toString();
        __$.cqA(H, `[stderr] ${_}`);
        let G = _.split(`
`).filter(Z => Z.length > 0).length;
        __$.eY(H, w, Z => ({
          ...Z,
          stderrLineCount: Z.stderrLineCount + G
        }));
      }), z.result.then($ => {
        z.cleanup();
        let _ = !1;
        if (__$.eY(H, w, G => {
          if (G.status === "killed") return _ = !0, G;
          return {
            ...G,
            status: $.code === 0 ? "completed" : "failed",
            result: {
              code: $.code,
              interrupted: $.interrupted
            },
            shellCommand: null,
            unregisterCleanup: void 0,
            endTime: Date.now()
          };
        }), _) __$.$mA(H, Y, "killed", $.code, w);else {
          let G = $.code === 0 ? "completed" : "failed";
          __$.$mA(H, Y, G, $.code, w);
        }
      }), {
        taskId: H,
        cleanup: () => {
          J();
        }
      };
    },
    async kill(A, K) {
      __$.JP6(A, K.setAppState);
    },
    renderStatus(A) {
      if (!__$.ra(A)) return null;
      let {
        status: K,
        command: q
      } = A;
      return __$.Lp.createElement(__$.S, null, __$.Lp.createElement(__$.V, {
        color: K === "running" ? "warning" : K === "completed" ? "success" : K === "failed" ? "error" : "inactive"
      }, "[", K, "] ", q));
    },
    renderOutput(A) {
      return __$.Lp.createElement(__$.S, null, __$.Lp.createElement(__$.V, null, A));
    },
    getProgressMessage(A) {
      if (!__$.ra(A)) return null;
      let K = A.stdoutLineCount - A.lastReportedStdoutLines,
        q = A.stderrLineCount - A.lastReportedStderrLines;
      if (K === 0 && q === 0) return null;
      let Y = [];
      if (K > 0) Y.push(`${K} line${K > 1 ? "s" : ""} of stdout`);
      if (q > 0) Y.push(`${q} line${q > 1 ? "s" : ""} of stderr`);
      return `Background bash ${A.id} has new output: ${Y.join(", ")}. Read ${A.outputFile} to see output.`;
    }
  };
});

// Register to shared state
__$._WA = _WA;

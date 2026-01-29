// Module: wk8
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wk8 = v(zk8 => {
  Object.defineProperty(zk8, "__esModule", {
    value: !0
  });
  var _6A = __$.sq(),
    G6A = __$.H8(),
    qk8 = "CaptureConsole",
    U15 = (A = {}) => {
      let K = A.levels || G6A.CONSOLE_LEVELS;
      return {
        name: qk8,
        setupOnce() {},
        setup(q) {
          if (!("console" in G6A.GLOBAL_OBJ)) return;
          G6A.addConsoleInstrumentationHandler(({
            args: Y,
            level: z
          }) => {
            if (_6A.getClient() !== q || !K.includes(z)) return;
            d15(Y, z);
          });
        }
      };
    },
    Yk8 = _6A.defineIntegration(U15),
    p15 = _6A.convertIntegrationFnToClass(qk8, Yk8);
  function d15(A, K) {
    let q = {
      level: G6A.severityLevelFromString(K),
      extra: {
        arguments: A
      }
    };
    _6A.withScope(Y => {
      if (Y.addEventProcessor(H => {
        return H.logger = "console", G6A.addExceptionMechanism(H, {
          handled: !1,
          type: "console"
        }), H;
      }), K === "assert" && A[0] === !1) {
        let H = `Assertion failed: ${G6A.safeJoin(A.slice(1), " ") || "console.assert"}`;
        Y.setExtra("arguments", A.slice(1)), _6A.captureMessage(H, q);
        return;
      }
      let z = A.find(H => H instanceof Error);
      if (K === "error" && z) {
        _6A.captureException(z, q);
        return;
      }
      let w = G6A.safeJoin(A, " ");
      _6A.captureMessage(w, q);
    });
  }
  zk8.CaptureConsole = p15;
  zk8.captureConsoleIntegration = Yk8;
});

// Register to shared state
__$.wk8 = wk8;

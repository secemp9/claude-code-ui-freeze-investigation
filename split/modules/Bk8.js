// Module: Bk8
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bk8 = v(uk8 => {
  Object.defineProperty(uk8, "__esModule", {
    value: !0
  });
  var svA = __$.sq(),
    hk8 = __$.H8(),
    M65 = hk8.GLOBAL_OBJ,
    bk8 = "ReportingObserver",
    Sk8 = new WeakMap(),
    P65 = (A = {}) => {
      let K = A.types || ["crash", "deprecation", "intervention"];
      function q(Y) {
        if (!Sk8.has(svA.getClient())) return;
        for (let z of Y) svA.withScope(w => {
          w.setExtra("url", z.url);
          let H = `ReportingObserver [${z.type}]`,
            J = "No details available";
          if (z.body) {
            let O = {};
            for (let X in z.body) O[X] = z.body[X];
            if (w.setExtra("body", O), z.type === "crash") {
              let X = z.body;
              J = [X.crashId || "", X.reason || ""].join(" ").trim() || J;
            } else J = z.body.message || J;
          }
          svA.captureMessage(`${H}: ${J}`);
        });
      }
      return {
        name: bk8,
        setupOnce() {
          if (!hk8.supportsReportingObserver()) return;
          new M65.ReportingObserver(q, {
            buffered: !0,
            types: K
          }).observe();
        },
        setup(Y) {
          Sk8.set(Y, !0);
        }
      };
    },
    xk8 = svA.defineIntegration(P65),
    V65 = svA.convertIntegrationFnToClass(bk8, xk8);
  uk8.ReportingObserver = V65;
  uk8.reportingObserverIntegration = xk8;
});

// Register to shared state
__$.Bk8 = Bk8;

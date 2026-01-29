// Module: LC8
// Dependencies: sq, qeA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LC8 = v(CC8 => {
  Object.defineProperty(CC8, "__esModule", {
    value: !0
  });
  var vC8 = __$.sq(),
    EC8 = __$.qeA(),
    kC8 = "Automatic instrumentation of CronJob only supports crontab string";
  function R85(A, K) {
    let q = !1;
    return new Proxy(A, {
      construct(Y, z) {
        let [w, H, J, O, X, ...$] = z;
        if (typeof w !== "string") throw Error(kC8);
        if (q) throw Error(`A job named '${K}' has already been scheduled`);
        q = !0;
        let _ = EC8.replaceCronNames(w);
        function G(Z, W) {
          return vC8.withMonitor(K, () => {
            return H(Z, W);
          }, {
            schedule: {
              type: "crontab",
              value: _
            },
            timezone: X || void 0
          });
        }
        return new Y(w, G, J, O, X, ...$);
      },
      get(Y, z) {
        if (z === "from") return w => {
          let {
            cronTime: H,
            onTick: J,
            timeZone: O
          } = w;
          if (typeof H !== "string") throw Error(kC8);
          if (q) throw Error(`A job named '${K}' has already been scheduled`);
          q = !0;
          let X = EC8.replaceCronNames(H);
          return w.onTick = ($, _) => {
            return vC8.withMonitor(K, () => {
              return J($, _);
            }, {
              schedule: {
                type: "crontab",
                value: X
              },
              timezone: O || void 0
            });
          }, Y.from(w);
        };else return Y[z];
      }
    });
  }
  CC8.instrumentCron = R85;
});

// Register to shared state
__$.LC8 = LC8;

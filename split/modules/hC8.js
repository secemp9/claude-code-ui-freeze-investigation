// Module: hC8
// Dependencies: sq, qeA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hC8 = v(SC8 => {
  Object.defineProperty(SC8, "__esModule", {
    value: !0
  });
  var x85 = __$.sq(),
    u85 = __$.qeA();
  function B85(A) {
    return new Proxy(A, {
      get(K, q) {
        if (q === "scheduleJob") return new Proxy(K.scheduleJob, {
          apply(Y, z, w) {
            let [H, J] = w;
            if (typeof H !== "string" || typeof J !== "string") throw Error("Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string");
            let O = H,
              X = J;
            return x85.withMonitor(O, () => {
              return Y.apply(z, w);
            }, {
              schedule: {
                type: "crontab",
                value: u85.replaceCronNames(X)
              }
            });
          }
        });
        return K[q];
      }
    });
  }
  SC8.instrumentNodeSchedule = B85;
});

// Register to shared state
__$.hC8 = hC8;

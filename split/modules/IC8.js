// Module: IC8
// Dependencies: H8, sq, qeA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IC8 = v(yC8 => {
  var {
    _optionalChain: RC8
  } = __$.H8();
  Object.defineProperty(yC8, "__esModule", {
    value: !0
  });
  var I85 = __$.sq(),
    S85 = __$.qeA();
  function h85(A) {
    return new Proxy(A, {
      get(K, q) {
        if (q === "schedule" && K.schedule) return new Proxy(K.schedule, {
          apply(Y, z, w) {
            let [H,, J] = w;
            if (!RC8([J, "optionalAccess", O => O.name])) throw Error('Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.');
            return I85.withMonitor(J.name, () => {
              return Y.apply(z, w);
            }, {
              schedule: {
                type: "crontab",
                value: S85.replaceCronNames(H)
              },
              timezone: RC8([J, "optionalAccess", O => O.timezone])
            });
          }
        });else return K[q];
      }
    });
  }
  yC8.instrumentNodeCron = h85;
});

// Register to shared state
__$.IC8 = IC8;

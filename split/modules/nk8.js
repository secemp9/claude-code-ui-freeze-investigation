// Module: nk8
// Dependencies: sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nk8 = v(ik8 => {
  Object.defineProperty(ik8, "__esModule", {
    value: !0
  });
  var dk8 = __$.sq(),
    ck8 = "SessionTiming",
    C65 = () => {
      let A = Date.now();
      return {
        name: ck8,
        setupOnce() {},
        processEvent(K) {
          let q = Date.now();
          return {
            ...K,
            extra: {
              ...K.extra,
              ["session:start"]: A,
              ["session:duration"]: q - A,
              ["session:end"]: q
            }
          };
        }
      };
    },
    lk8 = dk8.defineIntegration(C65),
    L65 = dk8.convertIntegrationFnToClass(ck8, lk8);
  ik8.SessionTiming = L65;
  ik8.sessionTimingIntegration = lk8;
});

// Register to shared state
__$.nk8 = nk8;

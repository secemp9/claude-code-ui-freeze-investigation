// Module: eB1
// Dependencies: H8, KF

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eB1 = v(tV8 => {
  Object.defineProperty(tV8, "__esModule", {
    value: !0
  });
  var rV8 = __$.H8(),
    oV8 = __$.KF(),
    spq = "cause",
    tpq = 5,
    aV8 = "LinkedErrors",
    epq = (A = {}) => {
      let K = A.limit || tpq,
        q = A.key || spq;
      return {
        name: aV8,
        setupOnce() {},
        preprocessEvent(Y, z, w) {
          let H = w.getOptions();
          rV8.applyAggregateErrorsToEvent(rV8.exceptionFromError, H.stackParser, H.maxValueLength, q, K, Y, z);
        }
      };
    },
    sV8 = oV8.defineIntegration(epq),
    Adq = oV8.convertIntegrationFnToClass(aV8, sV8);
  tV8.LinkedErrors = Adq;
  tV8.linkedErrorsIntegration = sV8;
});

// Register to shared state
__$.eB1 = eB1;

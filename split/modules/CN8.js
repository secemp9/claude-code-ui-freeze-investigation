// Module: CN8
// Dependencies: vHA, vtA, EHA, A6A, kHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CN8 = v(kN8 => {
  Object.defineProperty(kN8, "__esModule", {
    value: !0
  });
  var fnq = __$.vHA(),
    Nnq = __$.vtA(),
    Tnq = __$.EHA(),
    vnq = __$.A6A(),
    Enq = __$.kHA(),
    knq = A => {
      let K = Nnq.getVisibilityWatcher(),
        q = Tnq.initMetric("FID"),
        Y,
        z = J => {
          if (J.startTime < K.firstHiddenTime) q.value = J.processingStart - J.startTime, q.entries.push(J), Y(!0);
        },
        w = J => {
          J.forEach(z);
        },
        H = vnq.observe("first-input", w);
      if (Y = fnq.bindReporter(A, q), H) Enq.onHidden(() => {
        w(H.takeRecords()), H.disconnect();
      }, !0);
    };
  kN8.onFID = knq;
});

// Register to shared state
__$.CN8 = CN8;

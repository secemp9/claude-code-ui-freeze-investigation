// Module: Xf8
// Dependencies: KF, zf8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xf8 = v(Of8 => {
  Object.defineProperty(Of8, "__esModule", {
    value: !0
  });
  var wf8 = __$.KF(),
    Zdq = __$.zf8(),
    Hf8 = "MetricsAggregator",
    Wdq = () => {
      return {
        name: Hf8,
        setupOnce() {},
        setup(A) {
          A.metricsAggregator = new Zdq.BrowserMetricsAggregator(A);
        }
      };
    },
    Jf8 = wf8.defineIntegration(Wdq),
    Ddq = wf8.convertIntegrationFnToClass(Hf8, Jf8);
  Of8.MetricsAggregator = Ddq;
  Of8.metricsAggregatorIntegration = Jf8;
});

// Register to shared state
__$.Xf8 = Xf8;

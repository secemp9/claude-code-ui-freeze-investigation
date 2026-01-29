// Module: jI
// Dependencies: RxA, C1, K7, l1, x4, ok, sN, sz, mx1, BxA
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jI = k(() => {
  __$.RxA();
  __$.C1();
  __$.K7();
  __$.l1();
  __$.x4();
  __$.ok();
  __$.sN();
  __$.sz();
  __$.mx1();
  __$.BxA();
  __$.Q_6();
  __$.wO1 = o(__$.$A(), 1), __$.IzY = [{
    rateLimitType: "five_hour",
    claimAbbrev: "5h",
    windowSeconds: 18000,
    thresholds: [{
      utilization: 0.9,
      timePct: 0.72
    }]
  }, {
    rateLimitType: "seven_day",
    claimAbbrev: "7d",
    windowSeconds: 604800,
    thresholds: [{
      utilization: 0.75,
      timePct: 0.6
    }, {
      utilization: 0.5,
      timePct: 0.35
    }, {
      utilization: 0.25,
      timePct: 0.15
    }]
  }], __$.SzY = {
    "5h": "five_hour",
    "7d": "seven_day",
    overage: "overage"
  };
  __$.zf = {
    status: "allowed",
    unifiedRateLimitFallbackAvailable: !1,
    isUsingOverage: !1
  }, __$.U_6 = new Set();
});

// Register to shared state
__$.jI = jI;

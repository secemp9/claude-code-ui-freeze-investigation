// Module: _IA
// Dependencies: Iq6, mA, i6, YK, y4, e6, p7, L89, $A, rG4
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _IA = k(() => {
  __$.Iq6();
  __$.mA();
  __$.i6();
  __$.YK();
  __$.y4();
  __$.e6();
  __$.p7();
  __$.L89 = o(__$.$A(), 1), __$.rG4 = o(__$.$A(), 1);
  __$.aG4 = __$.z6(() => {
    if (__$.oG4() || __$.Z2().projectOnboardingSeenCount >= 4 || process.env.IS_DEMO) return !1;
    return !0;
  });
});

// Register to shared state
__$._IA = _IA;

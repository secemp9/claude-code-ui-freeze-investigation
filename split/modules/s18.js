// Module: s18
// Dependencies: RR, a18, cY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s18 = k(() => {
  __$.RR();
  __$.a18 = __$.cY.hasStandardBrowserEnv ? ((A, K) => q => {
    return q = new URL(q, __$.cY.origin), A.protocol === q.protocol && A.host === q.host && (K || A.port === q.port);
  })(new URL(__$.cY.origin), __$.cY.navigator && /(msie|trident)/i.test(__$.cY.navigator.userAgent)) : () => !0;
});

// Register to shared state
__$.s18 = s18;

// Module: fV8
// Dependencies: usA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fV8 = v(VV8 => {
  Object.defineProperty(VV8, "__esModule", {
    value: !0
  });
  var PV8 = __$.usA();
  function $pq(A, K, q = [K], Y = "npm") {
    let z = A._metadata || {};
    if (!z.sdk) z.sdk = {
      name: `sentry.javascript.${K}`,
      packages: q.map(w => ({
        name: `${Y}:@sentry/${w}`,
        version: PV8.SDK_VERSION
      })),
      version: PV8.SDK_VERSION
    };
    A._metadata = z;
  }
  VV8.applySdkMetadata = $pq;
});

// Register to shared state
__$.fV8 = fV8;

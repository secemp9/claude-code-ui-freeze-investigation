// Module: Of7
// Dependencies: Yy, tV7, tqA, Kf7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Of7 = v(Hf7 => {
  Object.defineProperty(Hf7, "__esModule", {
    value: !0
  });
  Hf7.resolveRuntimeExtensions = void 0;
  var qf7 = __$.Yy(),
    Yf7 = __$.tV7(),
    zf7 = __$.tqA(),
    wf7 = __$.Kf7(),
    KhY = (A, K) => {
      let q = Object.assign((0, qf7.getAwsRegionExtensionConfiguration)(A), (0, zf7.getDefaultExtensionConfiguration)(A), (0, Yf7.getHttpHandlerExtensionConfiguration)(A), (0, wf7.getHttpAuthExtensionConfiguration)(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, (0, qf7.resolveAwsRegionExtensionConfiguration)(q), (0, zf7.resolveDefaultRuntimeConfig)(q), (0, Yf7.resolveHttpHandlerRuntimeConfig)(q), (0, wf7.resolveHttpAuthRuntimeConfig)(q));
    };
  Hf7.resolveRuntimeExtensions = KhY;
});

// Register to shared state
__$.Of7 = Of7;

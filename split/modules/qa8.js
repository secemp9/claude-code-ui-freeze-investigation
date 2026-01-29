// Module: qa8
// Dependencies: Yy, P81, ej, oo8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qa8 = v(Aa8 => {
  Object.defineProperty(Aa8, "__esModule", {
    value: !0
  });
  Aa8.resolveRuntimeExtensions = void 0;
  var ao8 = __$.Yy(),
    so8 = __$.P81(),
    to8 = __$.ej(),
    eo8 = __$.oo8(),
    Kl5 = (A, K) => {
      let q = Object.assign((0, ao8.getAwsRegionExtensionConfiguration)(A), (0, to8.getDefaultExtensionConfiguration)(A), (0, so8.getHttpHandlerExtensionConfiguration)(A), (0, eo8.getHttpAuthExtensionConfiguration)(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, (0, ao8.resolveAwsRegionExtensionConfiguration)(q), (0, to8.resolveDefaultRuntimeConfig)(q), (0, so8.resolveHttpHandlerRuntimeConfig)(q), (0, eo8.resolveHttpAuthRuntimeConfig)(q));
    };
  Aa8.resolveRuntimeExtensions = Kl5;
});

// Register to shared state
__$.qa8 = qa8;

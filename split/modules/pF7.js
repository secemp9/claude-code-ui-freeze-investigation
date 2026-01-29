// Module: pF7
// Dependencies: BgA, gF7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pF7 = v(QF7 => {
  Object.defineProperty(QF7, "__esModule", {
    value: !0
  });
  QF7.getHttpConfigurationDefaults = QF7.mergeOtlpHttpConfigurationWithDefaults = void 0;
  var FF7 = __$.BgA(),
    _42 = __$.gF7();
  function G42(A, K, q) {
    return async () => {
      let Y = {
          ...(await q())
        },
        z = {};
      if (K != null) Object.assign(z, await K());
      if (A != null) Object.assign(z, (0, _42.validateAndNormalizeHeaders)(await A()));
      return Object.assign(z, Y);
    };
  }
  function Z42(A) {
    if (A == null) return;
    try {
      let K = globalThis.location?.href;
      return new URL(A, K).href;
    } catch {
      throw Error(`Configuration: Could not parse user-provided export URL: '${A}'`);
    }
  }
  function W42(A, K, q) {
    return {
      ...(0, FF7.mergeOtlpSharedConfigurationWithDefaults)(A, K, q),
      headers: G42(A.headers, K.headers, q.headers),
      url: Z42(A.url) ?? K.url ?? q.url
    };
  }
  QF7.mergeOtlpHttpConfigurationWithDefaults = W42;
  function D42(A, K) {
    return {
      ...(0, FF7.getSharedConfigurationDefaults)(),
      headers: async () => A,
      url: "http://localhost:4318/" + K
    };
  }
  QF7.getHttpConfigurationDefaults = D42;
});

// Register to shared state
__$.pF7 = pF7;

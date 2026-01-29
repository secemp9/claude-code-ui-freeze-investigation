// Module: tr7
// Dependencies: RK, Ur7, xFA, rr7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tr7 = v(ar7 => {
  Object.defineProperty(ar7, "__esModule", {
    value: !0
  });
  ar7.convertLegacyOtlpGrpcOptions = void 0;
  var z02 = __$.RK(),
    or7 = __$.Ur7(),
    w02 = __$.xFA(),
    H02 = __$.rr7();
  function J02(A, K) {
    if (A.headers) z02.diag.warn("Headers cannot be set when using grpc");
    let q = A.credentials;
    return (0, or7.mergeOtlpGrpcConfigurationWithDefaults)({
      url: A.url,
      metadata: () => {
        return A.metadata ?? (0, w02.createEmptyMetadata)();
      },
      compression: A.compression,
      timeoutMillis: A.timeoutMillis,
      concurrencyLimit: A.concurrencyLimit,
      credentials: q != null ? () => q : void 0,
      userAgent: A.userAgent
    }, (0, H02.getOtlpGrpcConfigurationFromEnv)(K), (0, or7.getOtlpGrpcDefaultConfiguration)());
  }
  ar7.convertLegacyOtlpGrpcOptions = J02;
});

// Register to shared state
__$.tr7 = tr7;

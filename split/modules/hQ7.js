// Module: hQ7
// Dependencies: RK, MD1, sp, kQ7, RQ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hQ7 = v(IQ7 => {
  Object.defineProperty(IQ7, "__esModule", {
    value: !0
  });
  IQ7.convertLegacyHttpOptions = void 0;
  var $72 = __$.RK(),
    yQ7 = __$.MD1(),
    _72 = __$.sp(),
    G72 = __$.kQ7(),
    Z72 = __$.RQ7();
  function W72(A) {
    if (typeof A.httpAgentOptions === "function") return A.httpAgentOptions;
    let K = A.httpAgentOptions;
    if (A.keepAlive != null) K = {
      keepAlive: A.keepAlive,
      ...K
    };
    if (K != null) return (0, _72.httpAgentFactoryFromOptions)(K);else return;
  }
  function D72(A, K, q, Y) {
    if (A.metadata) $72.diag.warn("Metadata cannot be set when using http");
    return (0, yQ7.mergeOtlpNodeHttpConfigurationWithDefaults)({
      url: A.url,
      headers: (0, Z72.convertLegacyHeaders)(A),
      concurrencyLimit: A.concurrencyLimit,
      timeoutMillis: A.timeoutMillis,
      compression: A.compression,
      agentFactory: W72(A),
      userAgent: A.userAgent
    }, (0, G72.getNodeHttpConfigurationFromEnvironment)(K, q), (0, yQ7.getNodeHttpConfigurationDefaults)(Y, q));
  }
  IQ7.convertLegacyHttpOptions = D72;
});

// Register to shared state
__$.hQ7 = hQ7;

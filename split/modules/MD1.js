// Module: MD1
// Dependencies: pF7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MD1 = v(lF7 => {
  Object.defineProperty(lF7, "__esModule", {
    value: !0
  });
  lF7.getNodeHttpConfigurationDefaults = lF7.mergeOtlpNodeHttpConfigurationWithDefaults = lF7.httpAgentFactoryFromOptions = void 0;
  var dF7 = __$.pF7();
  function cF7(A) {
    return async K => {
      let q = K === "http:",
        Y = q ? import("http") : import("https"),
        {
          Agent: z
        } = await Y;
      if (q) {
        let {
          ca: w,
          cert: H,
          key: J,
          ...O
        } = A;
        return new z(O);
      }
      return new z(A);
    };
  }
  lF7.httpAgentFactoryFromOptions = cF7;
  function M42(A, K, q) {
    return {
      ...(0, dF7.mergeOtlpHttpConfigurationWithDefaults)(A, K, q),
      agentFactory: A.agentFactory ?? K.agentFactory ?? q.agentFactory,
      userAgent: A.userAgent
    };
  }
  lF7.mergeOtlpNodeHttpConfigurationWithDefaults = M42;
  function P42(A, K) {
    return {
      ...(0, dF7.getHttpConfigurationDefaults)(A, K),
      agentFactory: cF7({
        keepAlive: !0
      })
    };
  }
  lF7.getNodeHttpConfigurationDefaults = P42;
});

// Register to shared state
__$.MD1 = MD1;

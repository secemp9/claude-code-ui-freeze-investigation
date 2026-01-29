// Module: NE6
// Dependencies: P9, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NE6 = v(NQ7 => {
  Object.defineProperty(NQ7, "__esModule", {
    value: !0
  });
  NQ7.getSharedConfigurationFromEnvironment = void 0;
  var VQ7 = __$.P9(),
    fQ7 = __$.RK();
  function MQ7(A) {
    let K = (0, VQ7.getNumberFromEnv)(A);
    if (K != null) {
      if (Number.isFinite(K) && K > 0) return K;
      fQ7.diag.warn(`Configuration: ${A} is invalid, expected number greater than 0 (actual: ${K})`);
    }
    return;
  }
  function l42(A) {
    let K = MQ7(`OTEL_EXPORTER_OTLP_${A}_TIMEOUT`),
      q = MQ7("OTEL_EXPORTER_OTLP_TIMEOUT");
    return K ?? q;
  }
  function PQ7(A) {
    let K = (0, VQ7.getStringFromEnv)(A)?.trim();
    if (K == null || K === "none" || K === "gzip") return K;
    fQ7.diag.warn(`Configuration: ${A} is invalid, expected 'none' or 'gzip' (actual: '${K}')`);
    return;
  }
  function i42(A) {
    let K = PQ7(`OTEL_EXPORTER_OTLP_${A}_COMPRESSION`),
      q = PQ7("OTEL_EXPORTER_OTLP_COMPRESSION");
    return K ?? q;
  }
  function n42(A) {
    return {
      timeoutMillis: l42(A),
      compression: i42(A)
    };
  }
  NQ7.getSharedConfigurationFromEnvironment = n42;
});

// Register to shared state
__$.NE6 = NE6;

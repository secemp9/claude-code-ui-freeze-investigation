// Module: fR4
// Dependencies: P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fR4 = v(PR4 => {
  Object.defineProperty(PR4, "__esModule", {
    value: !0
  });
  PR4.reconfigureLimits = PR4.loadDefaultConfig = void 0;
  var A$A = __$.P9();
  function i_9() {
    return {
      forceFlushTimeoutMillis: 30000,
      logRecordLimits: {
        attributeValueLengthLimit: (0, A$A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, A$A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? 128
      },
      includeTraceContext: !0
    };
  }
  PR4.loadDefaultConfig = i_9;
  function n_9(A) {
    return {
      attributeCountLimit: A.attributeCountLimit ?? (0, A$A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? (0, A$A.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      attributeValueLengthLimit: A.attributeValueLengthLimit ?? (0, A$A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? (0, A$A.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0
    };
  }
  PR4.reconfigureLimits = n_9;
});

// Register to shared state
__$.fR4 = fR4;

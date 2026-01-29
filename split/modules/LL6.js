// Module: LL6
// Dependencies: CL6, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LL6 = v(Wa7 => {
  Object.defineProperty(Wa7, "__esModule", {
    value: !0
  });
  Wa7.reconfigureLimits = Wa7.mergeConfig = Wa7.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Wa7.DEFAULT_ATTRIBUTE_COUNT_LIMIT = void 0;
  var Za7 = __$.CL6(),
    KM1 = __$.P9();
  Wa7.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
  Wa7.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
  function wX2(A) {
    let K = {
        sampler: (0, Za7.buildSamplerFromEnv)()
      },
      q = (0, Za7.loadDefaultConfig)(),
      Y = Object.assign({}, q, K, A);
    return Y.generalLimits = Object.assign({}, q.generalLimits, A.generalLimits || {}), Y.spanLimits = Object.assign({}, q.spanLimits, A.spanLimits || {}), Y;
  }
  Wa7.mergeConfig = wX2;
  function HX2(A) {
    let K = Object.assign({}, A.spanLimits);
    return K.attributeCountLimit = A.spanLimits?.attributeCountLimit ?? A.generalLimits?.attributeCountLimit ?? (0, KM1.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? (0, KM1.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? Wa7.DEFAULT_ATTRIBUTE_COUNT_LIMIT, K.attributeValueLengthLimit = A.spanLimits?.attributeValueLengthLimit ?? A.generalLimits?.attributeValueLengthLimit ?? (0, KM1.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? (0, KM1.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? Wa7.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT, Object.assign({}, A, {
      spanLimits: K
    });
  }
  Wa7.reconfigureLimits = HX2;
});

// Register to shared state
__$.LL6 = LL6;

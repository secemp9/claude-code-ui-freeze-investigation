// Module: qb7
// Dependencies: is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qb7 = v(Ab7 => {
  Object.defineProperty(Ab7, "__esModule", {
    value: !0
  });
  Ab7._resolveDeltasResponse = void 0;
  var eh7 = __$.is(),
    EtY = 2;
  function ktY(A, K) {
    let q = (0, eh7._typedJsonParse)(K, "checksum", "DeltasEvaluationResponse");
    if (!q) return {
      hadBadDeltaChecksum: !0
    };
    let Y = CtY(A, q),
      z = LtY(Y),
      w = (0, eh7._DJB2Object)({
        feature_gates: z.feature_gates,
        dynamic_configs: z.dynamic_configs,
        layer_configs: z.layer_configs
      }, EtY);
    if (w !== q.checksumV2) return {
      hadBadDeltaChecksum: !0,
      badChecksum: w,
      badMergedConfigs: z,
      badFullResponse: q.deltas_full_response
    };
    return JSON.stringify(z);
  }
  Ab7._resolveDeltasResponse = ktY;
  function CtY(A, K) {
    return Object.assign(Object.assign(Object.assign({}, A), K), {
      feature_gates: Object.assign(Object.assign({}, A.feature_gates), K.feature_gates),
      layer_configs: Object.assign(Object.assign({}, A.layer_configs), K.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, A.dynamic_configs), K.dynamic_configs)
    });
  }
  function LtY(A) {
    let K = A;
    return zv6(A.deleted_gates, K.feature_gates), delete K.deleted_gates, zv6(A.deleted_configs, K.dynamic_configs), delete K.deleted_configs, zv6(A.deleted_layers, K.layer_configs), delete K.deleted_layers, K;
  }
  function zv6(A, K) {
    A === null || A === void 0 || A.forEach(q => {
      delete K[q];
    });
  }
});

// Register to shared state
__$.qb7 = qb7;

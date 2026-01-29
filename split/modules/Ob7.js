// Module: Ob7
// Dependencies: is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ob7 = v(Hb7 => {
  Object.defineProperty(Hb7, "__esModule", {
    value: !0
  });
  Hb7._makeParamStoreGetter = void 0;
  var wb7 = __$.is(),
    mW1 = {
      disableExposureLog: !0
    };
  function gW1(A) {
    return A == null || A.disableExposureLog === !1;
  }
  function Hv6(A, K) {
    return K != null && !(0, wb7._isTypeMatch)(A, K);
  }
  function ytY(A, K) {
    return A.value;
  }
  function ItY(A, K, q) {
    if (A.getFeatureGate(K.gate_name, gW1(q) ? void 0 : mW1).value) return K.pass_value;
    return K.fail_value;
  }
  function StY(A, K, q, Y) {
    let w = A.getDynamicConfig(K.config_name, mW1).get(K.param_name);
    if (Hv6(w, q)) return q;
    if (gW1(Y)) A.getDynamicConfig(K.config_name);
    return w;
  }
  function htY(A, K, q, Y) {
    let w = A.getExperiment(K.experiment_name, mW1).get(K.param_name);
    if (Hv6(w, q)) return q;
    if (gW1(Y)) A.getExperiment(K.experiment_name);
    return w;
  }
  function btY(A, K, q, Y) {
    let w = A.getLayer(K.layer_name, mW1).get(K.param_name);
    if (Hv6(w, q)) return q;
    if (gW1(Y)) A.getLayer(K.layer_name).get(K.param_name);
    return w;
  }
  function xtY(A, K, q) {
    return (Y, z) => {
      if (K == null) return z;
      let w = K[Y];
      if (w == null || z != null && (0, wb7._typeOf)(z) !== w.param_type) return z;
      switch (w.ref_type) {
        case "static":
          return ytY(w, q);
        case "gate":
          return ItY(A, w, q);
        case "dynamic_config":
          return StY(A, w, z, q);
        case "experiment":
          return htY(A, w, z, q);
        case "layer":
          return btY(A, w, z, q);
        default:
          return z;
      }
    };
  }
  Hb7._makeParamStoreGetter = xtY;
});

// Register to shared state
__$.Ob7 = Ob7;

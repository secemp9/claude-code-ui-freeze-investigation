// Module: uT6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uT6 = v(qS7 => {
  Object.defineProperty(qS7, "__esModule", {
    value: !0
  });
  qS7._createLayerParameterExposure = qS7._createConfigExposure = qS7._mapExposures = qS7._createGateExposure = qS7._isExposureEvent = void 0;
  var eI7 = "statsig::config_exposure",
    AS7 = "statsig::gate_exposure",
    KS7 = "statsig::layer_exposure",
    xT6 = (A, K, q, Y, z) => {
      if (q.bootstrapMetadata) Y.bootstrapMetadata = q.bootstrapMetadata;
      return {
        eventName: A,
        user: K,
        value: null,
        metadata: ZaY(q, Y),
        secondaryExposures: z,
        time: Date.now()
      };
    },
    XaY = ({
      eventName: A
    }) => {
      return A === AS7 || A === eI7 || A === KS7;
    };
  qS7._isExposureEvent = XaY;
  var $aY = (A, K, q) => {
    var Y, z, w;
    let H = {
      gate: K.name,
      gateValue: String(K.value),
      ruleID: K.ruleID
    };
    if (((Y = K.__evaluation) === null || Y === void 0 ? void 0 : Y.version) != null) H.configVersion = K.__evaluation.version;
    return xT6(AS7, A, K.details, H, MW1((w = (z = K.__evaluation) === null || z === void 0 ? void 0 : z.secondary_exposures) !== null && w !== void 0 ? w : [], q));
  };
  qS7._createGateExposure = $aY;
  function MW1(A, K) {
    return A.map(q => {
      if (typeof q === "string") return (K !== null && K !== void 0 ? K : {})[q];
      return q;
    }).filter(q => q != null);
  }
  qS7._mapExposures = MW1;
  var _aY = (A, K, q) => {
    var Y, z, w, H;
    let J = {
      config: K.name,
      ruleID: K.ruleID
    };
    if (((Y = K.__evaluation) === null || Y === void 0 ? void 0 : Y.version) != null) J.configVersion = K.__evaluation.version;
    if (((z = K.__evaluation) === null || z === void 0 ? void 0 : z.passed) != null) J.rulePassed = String(K.__evaluation.passed);
    return xT6(eI7, A, K.details, J, MW1((H = (w = K.__evaluation) === null || w === void 0 ? void 0 : w.secondary_exposures) !== null && H !== void 0 ? H : [], q));
  };
  qS7._createConfigExposure = _aY;
  var GaY = (A, K, q, Y) => {
    var z, w, H, J;
    let O = K.__evaluation,
      X = ((z = O === null || O === void 0 ? void 0 : O.explicit_parameters) === null || z === void 0 ? void 0 : z.includes(q)) === !0,
      $ = "",
      _ = (w = O === null || O === void 0 ? void 0 : O.undelegated_secondary_exposures) !== null && w !== void 0 ? w : [];
    if (X) $ = (H = O.allocated_experiment_name) !== null && H !== void 0 ? H : "", _ = O.secondary_exposures;
    let G = {
      config: K.name,
      parameterName: q,
      ruleID: K.ruleID,
      allocatedExperiment: $,
      isExplicitParameter: String(X)
    };
    if (((J = K.__evaluation) === null || J === void 0 ? void 0 : J.version) != null) G.configVersion = K.__evaluation.version;
    return xT6(KS7, A, K.details, G, MW1(_, Y));
  };
  qS7._createLayerParameterExposure = GaY;
  var ZaY = (A, K) => {
    if (K.reason = A.reason, A.lcut) K.lcut = String(A.lcut);
    if (A.receivedAt) K.receivedAt = String(A.receivedAt);
    return K;
  };
});

// Register to shared state
__$.uT6 = uT6;

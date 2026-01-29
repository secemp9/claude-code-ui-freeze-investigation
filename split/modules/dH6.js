// Module: dH6
// Dependencies: $hA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dH6 = v(co4 => {
  Object.defineProperty(co4, "__esModule", {
    value: !0
  });
  co4.GCPEnv = void 0;
  co4.clear = as9;
  co4.getEnv = ss9;
  var do4 = __$.$hA(),
    DU;
  (function (A) {
    A.APP_ENGINE = "APP_ENGINE", A.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", A.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", A.COMPUTE_ENGINE = "COMPUTE_ENGINE", A.CLOUD_RUN = "CLOUD_RUN", A.NONE = "NONE";
  })(DU || (co4.GCPEnv = DU = {}));
  var WhA;
  function as9() {
    WhA = void 0;
  }
  async function ss9() {
    if (WhA) return WhA;
    return WhA = ts9(), WhA;
  }
  async function ts9() {
    let A = DU.NONE;
    if (es9()) A = DU.APP_ENGINE;else if (At9()) A = DU.CLOUD_FUNCTIONS;else if (await Yt9()) {
      if (await qt9()) A = DU.KUBERNETES_ENGINE;else if (Kt9()) A = DU.CLOUD_RUN;else A = DU.COMPUTE_ENGINE;
    } else A = DU.NONE;
    return A;
  }
  function es9() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function At9() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function Kt9() {
    return !!process.env.K_CONFIGURATION;
  }
  async function qt9() {
    try {
      return await do4.instance("attributes/cluster-name"), !0;
    } catch (A) {
      return !1;
    }
  }
  async function Yt9() {
    return do4.isAvailable();
  }
});

// Register to shared state
__$.dH6 = dH6;

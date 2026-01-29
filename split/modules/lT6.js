// Module: lT6
// Dependencies: CDA, Xj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lT6 = v(CS7 => {
  Object.defineProperty(CS7, "__esModule", {
    value: !0
  });
  CS7._getFullUserHash = CS7._normalizeUser = void 0;
  var iaY = __$.CDA(),
    naY = __$.Xj();
  function raY(A, K, q) {
    try {
      let Y = JSON.parse(JSON.stringify(A));
      if (K != null && K.environment != null) Y.statsigEnvironment = K.environment;else if (q != null) Y.statsigEnvironment = {
        tier: q
      };
      return Y;
    } catch (Y) {
      return naY.Log.error("Failed to JSON.stringify user"), {
        statsigEnvironment: void 0
      };
    }
  }
  CS7._normalizeUser = raY;
  function oaY(A) {
    return A ? (0, iaY._DJB2Object)(A) : null;
  }
  CS7._getFullUserHash = oaY;
});

// Register to shared state
__$.lT6 = lT6;

// Module: cD4
// Dependencies: NIA, VIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cD4 = v(pD4 => {
  Object.defineProperty(pD4, "__esModule", {
    value: !0
  });
  pD4.deleteBaggage = pD4.setBaggage = pD4.getActiveBaggage = pD4.getBaggage = void 0;
  var n79 = __$.NIA(),
    r79 = __$.VIA(),
    R56 = (0, r79.createContextKey)("OpenTelemetry Baggage Key");
  function UD4(A) {
    return A.getValue(R56) || void 0;
  }
  pD4.getBaggage = UD4;
  function o79() {
    return UD4(n79.ContextAPI.getInstance().active());
  }
  pD4.getActiveBaggage = o79;
  function a79(A, K) {
    return A.setValue(R56, K);
  }
  pD4.setBaggage = a79;
  function s79(A) {
    return A.deleteValue(R56);
  }
  pD4.deleteBaggage = s79;
});

// Register to shared state
__$.cD4 = cD4;

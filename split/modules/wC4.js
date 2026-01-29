// Module: wC4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wC4 = v(YC4 => {
  Object.defineProperty(YC4, "__esModule", {
    value: !0
  });
  YC4.getRPCMetadata = YC4.deleteRPCMetadata = YC4.setRPCMetadata = YC4.RPCType = void 0;
  var jX9 = __$.RK(),
    J36 = (0, jX9.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
    MX9;
  (function (A) {
    A.HTTP = "http";
  })(MX9 = YC4.RPCType || (YC4.RPCType = {}));
  function PX9(A, K) {
    return A.setValue(J36, K);
  }
  YC4.setRPCMetadata = PX9;
  function VX9(A) {
    return A.deleteValue(J36);
  }
  YC4.deleteRPCMetadata = VX9;
  function fX9(A) {
    return A.getValue(J36);
  }
  YC4.getRPCMetadata = fX9;
});

// Register to shared state
__$.wC4 = wC4;

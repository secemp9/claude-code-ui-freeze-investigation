// Module: wP
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wP = v(IU7 => {
  Object.defineProperty(IU7, "__esModule", {
    value: !0
  });
  IU7.ConnectivityState = void 0;
  var yU7;
  (function (A) {
    A[A.IDLE = 0] = "IDLE", A[A.CONNECTING = 1] = "CONNECTING", A[A.READY = 2] = "READY", A[A.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE", A[A.SHUTDOWN = 4] = "SHUTDOWN";
  })(yU7 || (IU7.ConnectivityState = yU7 = {}));
});

// Register to shared state
__$.wP = wP;

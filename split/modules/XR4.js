// Module: XR4
// Dependencies: GL4, wR4, OR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XR4 = v(Lr => {
  Object.defineProperty(Lr, "__esModule", {
    value: !0
  });
  Lr.noopDetector = Lr.serviceInstanceIdDetector = Lr.processDetector = Lr.osDetector = Lr.hostDetector = Lr.envDetector = void 0;
  var g_9 = __$.GL4();
  Object.defineProperty(Lr, "envDetector", {
    enumerable: !0,
    get: function () {
      return g_9.envDetector;
    }
  });
  var X91 = __$.wR4();
  Object.defineProperty(Lr, "hostDetector", {
    enumerable: !0,
    get: function () {
      return X91.hostDetector;
    }
  });
  Object.defineProperty(Lr, "osDetector", {
    enumerable: !0,
    get: function () {
      return X91.osDetector;
    }
  });
  Object.defineProperty(Lr, "processDetector", {
    enumerable: !0,
    get: function () {
      return X91.processDetector;
    }
  });
  Object.defineProperty(Lr, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return X91.serviceInstanceIdDetector;
    }
  });
  var F_9 = __$.OR4();
  Object.defineProperty(Lr, "noopDetector", {
    enumerable: !0,
    get: function () {
      return F_9.noopDetector;
    }
  });
});

// Register to shared state
__$.XR4 = XR4;

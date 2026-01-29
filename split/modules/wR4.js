// Module: wR4
// Dependencies: zR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wR4 = v(tXA => {
  Object.defineProperty(tXA, "__esModule", {
    value: !0
  });
  tXA.serviceInstanceIdDetector = tXA.processDetector = tXA.osDetector = tXA.hostDetector = void 0;
  var O91 = __$.zR4();
  Object.defineProperty(tXA, "hostDetector", {
    enumerable: !0,
    get: function () {
      return O91.hostDetector;
    }
  });
  Object.defineProperty(tXA, "osDetector", {
    enumerable: !0,
    get: function () {
      return O91.osDetector;
    }
  });
  Object.defineProperty(tXA, "processDetector", {
    enumerable: !0,
    get: function () {
      return O91.processDetector;
    }
  });
  Object.defineProperty(tXA, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return O91.serviceInstanceIdDetector;
    }
  });
});

// Register to shared state
__$.wR4 = wR4;

// Module: zR4
// Dependencies: dL4, oL4, eL4, YR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zR4 = v(sXA => {
  Object.defineProperty(sXA, "__esModule", {
    value: !0
  });
  sXA.serviceInstanceIdDetector = sXA.processDetector = sXA.osDetector = sXA.hostDetector = void 0;
  var S_9 = __$.dL4();
  Object.defineProperty(sXA, "hostDetector", {
    enumerable: !0,
    get: function () {
      return S_9.hostDetector;
    }
  });
  var h_9 = __$.oL4();
  Object.defineProperty(sXA, "osDetector", {
    enumerable: !0,
    get: function () {
      return h_9.osDetector;
    }
  });
  var b_9 = __$.eL4();
  Object.defineProperty(sXA, "processDetector", {
    enumerable: !0,
    get: function () {
      return b_9.processDetector;
    }
  });
  var x_9 = __$.YR4();
  Object.defineProperty(sXA, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return x_9.serviceInstanceIdDetector;
    }
  });
});

// Register to shared state
__$.zR4 = zR4;

// Module: eXA
// Dependencies: JL4, XR4, D36, G36

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eXA = v(nk => {
  Object.defineProperty(nk, "__esModule", {
    value: !0
  });
  nk.defaultServiceName = nk.emptyResource = nk.defaultResource = nk.resourceFromAttributes = nk.serviceInstanceIdDetector = nk.processDetector = nk.osDetector = nk.hostDetector = nk.envDetector = nk.detectResources = void 0;
  var U_9 = __$.JL4();
  Object.defineProperty(nk, "detectResources", {
    enumerable: !0,
    get: function () {
      return U_9.detectResources;
    }
  });
  var IIA = __$.XR4();
  Object.defineProperty(nk, "envDetector", {
    enumerable: !0,
    get: function () {
      return IIA.envDetector;
    }
  });
  Object.defineProperty(nk, "hostDetector", {
    enumerable: !0,
    get: function () {
      return IIA.hostDetector;
    }
  });
  Object.defineProperty(nk, "osDetector", {
    enumerable: !0,
    get: function () {
      return IIA.osDetector;
    }
  });
  Object.defineProperty(nk, "processDetector", {
    enumerable: !0,
    get: function () {
      return IIA.processDetector;
    }
  });
  Object.defineProperty(nk, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return IIA.serviceInstanceIdDetector;
    }
  });
  var f36 = __$.D36();
  Object.defineProperty(nk, "resourceFromAttributes", {
    enumerable: !0,
    get: function () {
      return f36.resourceFromAttributes;
    }
  });
  Object.defineProperty(nk, "defaultResource", {
    enumerable: !0,
    get: function () {
      return f36.defaultResource;
    }
  });
  Object.defineProperty(nk, "emptyResource", {
    enumerable: !0,
    get: function () {
      return f36.emptyResource;
    }
  });
  var p_9 = __$.G36();
  Object.defineProperty(nk, "defaultServiceName", {
    enumerable: !0,
    get: function () {
      return p_9.defaultServiceName;
    }
  });
});

// Register to shared state
__$.eXA = eXA;

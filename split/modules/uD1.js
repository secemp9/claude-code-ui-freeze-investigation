// Module: uD1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uD1 = v(Gp7 => {
  Object.defineProperty(Gp7, "__esModule", {
    value: !0
  });
  Gp7.registerAdminService = $52;
  Gp7.addAdminServicesToServer = _52;
  var _p7 = [];
  function $52(A, K) {
    _p7.push({
      getServiceDefinition: A,
      getHandlers: K
    });
  }
  function _52(A) {
    for (let {
      getServiceDefinition: K,
      getHandlers: q
    } of _p7) A.addService(K(), q());
  }
});

// Register to shared state
__$.uD1 = uD1;

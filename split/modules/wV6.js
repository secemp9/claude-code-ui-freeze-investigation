// Module: wV6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wV6 = v(sP7 => {
  Object.defineProperty(sP7, "__esModule", {
    value: !0
  });
  sP7.commonParams = sP7.resolveClientEndpointParameters = void 0;
  var sIY = A => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
      defaultSigningName: "sts"
    });
  };
  sP7.resolveClientEndpointParameters = sIY;
  sP7.commonParams = {
    UseGlobalEndpoint: {
      type: "builtInParams",
      name: "useGlobalEndpoint"
    },
    UseFIPS: {
      type: "builtInParams",
      name: "useFipsEndpoint"
    },
    Endpoint: {
      type: "builtInParams",
      name: "endpoint"
    },
    Region: {
      type: "builtInParams",
      name: "region"
    },
    UseDualStack: {
      type: "builtInParams",
      name: "useDualstackEndpoint"
    }
  };
});

// Register to shared state
__$.wV6 = wV6;

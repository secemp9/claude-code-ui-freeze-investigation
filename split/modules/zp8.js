// Module: zp8
// Dependencies: NV, Kp8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zp8 = v(qp8 => {
  Object.defineProperty(qp8, "__esModule", {
    value: !0
  });
  qp8.getEndpointFromConfig = void 0;
  var tk5 = __$.NV(),
    ek5 = __$.Kp8(),
    AC5 = async A => (0, tk5.loadConfig)((0, ek5.getEndpointUrlConfig)(A ?? ""))();
  qp8.getEndpointFromConfig = AC5;
});

// Register to shared state
__$.zp8 = zp8;

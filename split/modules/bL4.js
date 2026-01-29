// Module: bL4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bL4 = v(SL4 => {
  Object.defineProperty(SL4, "__esModule", {
    value: !0
  });
  SL4.getMachineId = void 0;
  var M_9 = __$.RK();
  async function P_9() {
    M_9.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  SL4.getMachineId = P_9;
});

// Register to shared state
__$.bL4 = bL4;

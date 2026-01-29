// Module: VL4
// Dependencies: J91, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VL4 = v(ML4 => {
  Object.defineProperty(ML4, "__esModule", {
    value: !0
  });
  ML4.getMachineId = void 0;
  var w_9 = __$.J91(),
    H_9 = __$.RK();
  async function J_9() {
    try {
      let K = (await (0, w_9.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find(Y => Y.includes("IOPlatformUUID"));
      if (!K) return;
      let q = K.split('" = "');
      if (q.length === 2) return q[1].slice(0, -1);
    } catch (A) {
      H_9.diag.debug(`error reading machine id: ${A}`);
    }
    return;
  }
  ML4.getMachineId = J_9;
});

// Register to shared state
__$.VL4 = VL4;

// Module: BL4
// Dependencies: VL4, TL4, CL4, IL4, bL4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BL4 = v(xL4 => {
  Object.defineProperty(xL4, "__esModule", {
    value: !0
  });
  xL4.getMachineId = void 0;
  var V_9 = CA("process"),
    l4A;
  async function f_9() {
    if (!l4A) switch (V_9.platform) {
      case "darwin":
        l4A = (await Promise.resolve().then(() => o(__$.VL4()))).getMachineId;
        break;
      case "linux":
        l4A = (await Promise.resolve().then(() => o(__$.TL4()))).getMachineId;
        break;
      case "freebsd":
        l4A = (await Promise.resolve().then(() => o(__$.CL4()))).getMachineId;
        break;
      case "win32":
        l4A = (await Promise.resolve().then(() => o(__$.IL4()))).getMachineId;
        break;
      default:
        l4A = (await Promise.resolve().then(() => o(__$.bL4()))).getMachineId;
        break;
    }
    return l4A();
  }
  xL4.getMachineId = f_9;
});

// Register to shared state
__$.BL4 = BL4;

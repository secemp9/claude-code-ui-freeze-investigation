// Module: kW1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kW1 = v(VS7 => {
  Object.defineProperty(VS7, "__esModule", {
    value: !0
  });
  VS7.getUUID = void 0;
  function UaY() {
    if (typeof crypto < "u" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    let A = new Date().getTime(),
      K = typeof performance < "u" && performance.now && performance.now() * 1000 || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, Y => {
      let z = Math.random() * 16;
      if (A > 0) z = (A + z) % 16 | 0, A = Math.floor(A / 16);else z = (K + z) % 16 | 0, K = Math.floor(K / 16);
      return (Y === "x" ? z : z & 7 | 8).toString(16);
    });
  }
  VS7.getUUID = UaY;
});

// Register to shared state
__$.kW1 = kW1;

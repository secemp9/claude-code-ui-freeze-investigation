// Module: gD8
// Dependencies: mu1, YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gD8 = v(mD8 => {
  Object.defineProperty(mD8, "__esModule", {
    value: !0
  });
  var dRq = __$.mu1(),
    BD8 = __$.YD();
  function cRq() {
    return typeof window < "u" && (!dRq.isNodeEnv() || lRq());
  }
  function lRq() {
    return BD8.GLOBAL_OBJ.process !== void 0 && BD8.GLOBAL_OBJ.process.type === "renderer";
  }
  mD8.isBrowser = cRq;
});

// Register to shared state
__$.gD8 = gD8;

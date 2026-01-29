// Module: uE8
// Dependencies: sq, ttA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uE8 = v(xE8 => {
  Object.defineProperty(xE8, "__esModule", {
    value: !0
  });
  var yA5 = __$.sq(),
    IA5 = __$.ttA();
  function SA5(A) {
    let K = yA5.getClient();
    return new IA5.Anr(A).setup(K), Promise.resolve();
  }
  xE8.enableAnrDetection = SA5;
});

// Register to shared state
__$.uE8 = uE8;

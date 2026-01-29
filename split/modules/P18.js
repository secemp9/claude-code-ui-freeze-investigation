// Module: P18
// Dependencies: V1A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P18 = v((FZz, M18) => {
  var HTA;
  M18.exports = function () {
    if (!HTA) {
      try {
        HTA = __$.V1A()("follow-redirects");
      } catch (A) {}
      if (typeof HTA !== "function") HTA = function () {};
    }
    HTA.apply(null, arguments);
  };
});

// Register to shared state
__$.P18 = P18;

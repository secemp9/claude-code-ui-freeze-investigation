// Module: $s
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $s = v(iN7 => {
  Object.defineProperty(iN7, "__esModule", {
    value: !0
  });
  var UV6;
  function pV6() {
    if (UV6 === void 0) throw Error("No runtime abstraction layer installed");
    return UV6;
  }
  (function (A) {
    function K(q) {
      if (q === void 0) throw Error("No runtime abstraction layer provided");
      UV6 = q;
    }
    A.install = K;
  })(pV6 || (pV6 = {}));
  iN7.default = pV6;
});

// Register to shared state
__$.$s = $s;

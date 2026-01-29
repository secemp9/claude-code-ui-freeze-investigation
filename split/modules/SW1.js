// Module: SW1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SW1 = v(FS7 => {
  Object.defineProperty(FS7, "__esModule", {
    value: !0
  });
  FS7.SDKType = void 0;
  var gS7 = {},
    SDA;
  FS7.SDKType = {
    _get: A => {
      var K;
      return ((K = gS7[A]) !== null && K !== void 0 ? K : "js-mono") + (SDA !== null && SDA !== void 0 ? SDA : "");
    },
    _setClientType(A, K) {
      gS7[A] = K;
    },
    _setBindingType(A) {
      if (!SDA || SDA === "-react") SDA = "-" + A;
    }
  };
});

// Register to shared state
__$.SW1 = SW1;

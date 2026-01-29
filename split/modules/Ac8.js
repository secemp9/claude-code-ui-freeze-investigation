// Module: Ac8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ac8 = v(td8 => {
  Object.defineProperty(td8, "__esModule", {
    value: !0
  });
  td8.retryWrapper = void 0;
  var Rh5 = (A, K, q) => {
    return async () => {
      for (let Y = 0; Y < K; ++Y) try {
        return await A();
      } catch (z) {
        await new Promise(w => setTimeout(w, q));
      }
      return await A();
    };
  };
  td8.retryWrapper = Rh5;
});

// Register to shared state
__$.Ac8 = Ac8;

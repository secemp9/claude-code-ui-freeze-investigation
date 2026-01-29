// Module: tT6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tT6 = v(Jh7 => {
  Object.defineProperty(Jh7, "__esModule", {
    value: !0
  });
  Jh7.SDKFlags = void 0;
  var Hh7 = {};
  Jh7.SDKFlags = {
    setFlags: (A, K) => {
      Hh7[A] = K;
    },
    get: (A, K) => {
      var q, Y;
      return (Y = (q = Hh7[A]) === null || q === void 0 ? void 0 : q[K]) !== null && Y !== void 0 ? Y : !1;
    }
  };
});

// Register to shared state
__$.tT6 = tT6;

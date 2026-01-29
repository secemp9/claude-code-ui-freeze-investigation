// Module: GI8
// Dependencies: XJA, $I8, b95, Sb, _I8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GI8 = k(() => {
  __$.XJA();
  __$.$I8 = Object.create, __$.b95 = function () {
    function A() {}
    return function (K) {
      if (!__$.Sb(K)) return {};
      if (__$.$I8) return __$.$I8(K);
      A.prototype = K;
      var q = new A();
      return A.prototype = void 0, q;
    };
  }(), __$._I8 = __$.b95;
});

// Register to shared state
__$.GI8 = GI8;

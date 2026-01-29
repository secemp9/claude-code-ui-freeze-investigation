// Module: Io6
// Dependencies: WE, Ro6, eoK, aJ, yo6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Io6 = k(() => {
  __$.WE();
  __$.Ro6 = Object.create, __$.eoK = function () {
    function A() {}
    return function (K) {
      if (!__$.aJ(K)) return {};
      if (__$.Ro6) return __$.Ro6(K);
      A.prototype = K;
      var q = new A();
      return A.prototype = void 0, q;
    };
  }(), __$.yo6 = __$.eoK;
});

// Register to shared state
__$.Io6 = Io6;

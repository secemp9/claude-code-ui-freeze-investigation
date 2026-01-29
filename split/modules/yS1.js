// Module: yS1
// Dependencies: hl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yS1 = v(p78 => {
  Object.defineProperty(p78, "__esModule", {
    value: !0
  });
  p78.ArgumentOutOfRangeError = void 0;
  var pqq = __$.hl();
  p78.ArgumentOutOfRangeError = pqq.createErrorClass(function (A) {
    return function () {
      A(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
    };
  });
});

// Register to shared state
__$.yS1 = yS1;

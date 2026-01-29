// Module: ul
// Dependencies: hl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ul = v(x78 => {
  Object.defineProperty(x78, "__esModule", {
    value: !0
  });
  x78.EmptyError = void 0;
  var Bqq = __$.hl();
  x78.EmptyError = Bqq.createErrorClass(function (A) {
    return function () {
      A(this), this.name = "EmptyError", this.message = "no elements in sequence";
    };
  });
});

// Register to shared state
__$.ul = ul;

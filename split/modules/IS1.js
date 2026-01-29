// Module: IS1
// Dependencies: hl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IS1 = v(c78 => {
  Object.defineProperty(c78, "__esModule", {
    value: !0
  });
  c78.NotFoundError = void 0;
  var dqq = __$.hl();
  c78.NotFoundError = dqq.createErrorClass(function (A) {
    return function (q) {
      A(this), this.name = "NotFoundError", this.message = q;
    };
  });
});

// Register to shared state
__$.IS1 = IS1;

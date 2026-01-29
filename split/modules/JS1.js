// Module: JS1
// Dependencies: hl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JS1 = v(L88 => {
  Object.defineProperty(L88, "__esModule", {
    value: !0
  });
  L88.ObjectUnsubscribedError = void 0;
  var g4q = __$.hl();
  L88.ObjectUnsubscribedError = g4q.createErrorClass(function (A) {
    return function () {
      A(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  });
});

// Register to shared state
__$.JS1 = JS1;

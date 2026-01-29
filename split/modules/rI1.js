// Module: rI1
// Dependencies: hl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rI1 = v(L68 => {
  Object.defineProperty(L68, "__esModule", {
    value: !0
  });
  L68.UnsubscriptionError = void 0;
  var g8q = __$.hl();
  L68.UnsubscriptionError = g8q.createErrorClass(function (A) {
    return function (q) {
      A(this), this.message = q ? q.length + ` errors occurred during unsubscription:
` + q.map(function (Y, z) {
        return z + 1 + ") " + Y.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = q;
    };
  });
});

// Register to shared state
__$.rI1 = rI1;

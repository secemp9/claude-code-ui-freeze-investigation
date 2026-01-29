// Module: hl
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hl = v(k68 => {
  Object.defineProperty(k68, "__esModule", {
    value: !0
  });
  k68.createErrorClass = void 0;
  function m8q(A) {
    var K = function (Y) {
        Error.call(Y), Y.stack = Error().stack;
      },
      q = A(K);
    return q.prototype = Object.create(Error.prototype), q.prototype.constructor = q, q;
  }
  k68.createErrorClass = m8q;
});

// Register to shared state
__$.hl = hl;

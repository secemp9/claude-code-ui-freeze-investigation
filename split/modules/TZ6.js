// Module: TZ6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TZ6 = v(A27 => {
  Object.defineProperty(A27, "__esModule", {
    value: !0
  });
  A27.shouldUseRule = A27.shouldUseGroup = A27.schemaHasRulesForType = void 0;
  function S0Y({
    schema: A,
    self: K
  }, q) {
    let Y = K.RULES.types[q];
    return Y && Y !== !0 && tY7(A, Y);
  }
  A27.schemaHasRulesForType = S0Y;
  function tY7(A, K) {
    return K.rules.some(q => eY7(A, q));
  }
  A27.shouldUseGroup = tY7;
  function eY7(A, K) {
    var q;
    return A[K.keyword] !== void 0 || ((q = K.definition.implements) === null || q === void 0 ? void 0 : q.some(Y => A[Y] !== void 0));
  }
  A27.shouldUseRule = eY7;
});

// Register to shared state
__$.TZ6 = TZ6;

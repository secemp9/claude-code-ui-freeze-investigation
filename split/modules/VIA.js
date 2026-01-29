// Module: VIA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VIA = v(eZ4 => {
  Object.defineProperty(eZ4, "__esModule", {
    value: !0
  });
  eZ4.ROOT_CONTEXT = eZ4.createContextKey = void 0;
  function S49(A) {
    return Symbol.for(A);
  }
  eZ4.createContextKey = S49;
  class c31 {
    constructor(A) {
      let K = this;
      K._currentContext = A ? new Map(A) : new Map(), K.getValue = q => K._currentContext.get(q), K.setValue = (q, Y) => {
        let z = new c31(K._currentContext);
        return z._currentContext.set(q, Y), z;
      }, K.deleteValue = q => {
        let Y = new c31(K._currentContext);
        return Y._currentContext.delete(q), Y;
      };
    }
  }
  eZ4.ROOT_CONTEXT = new c31();
});

// Register to shared state
__$.VIA = VIA;

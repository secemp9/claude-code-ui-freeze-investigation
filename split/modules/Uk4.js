// Module: Uk4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uk4 = v(Fk4 => {
  Object.defineProperty(Fk4, "__esModule", {
    value: !0
  });
  Fk4.CompositePropagator = void 0;
  var mk4 = __$.RK();
  class gk4 {
    _propagators;
    _fields;
    constructor(A = {}) {
      this._propagators = A.propagators ?? [], this._fields = Array.from(new Set(this._propagators.map(K => typeof K.fields === "function" ? K.fields() : []).reduce((K, q) => K.concat(q), [])));
    }
    inject(A, K, q) {
      for (let Y of this._propagators) try {
        Y.inject(A, K, q);
      } catch (z) {
        mk4.diag.warn(`Failed to inject with ${Y.constructor.name}. Err: ${z.message}`);
      }
    }
    extract(A, K, q) {
      return this._propagators.reduce((Y, z) => {
        try {
          return z.extract(Y, K, q);
        } catch (w) {
          mk4.diag.warn(`Failed to extract with ${z.constructor.name}. Err: ${w.message}`);
        }
        return Y;
      }, A);
    }
    fields() {
      return this._fields.slice();
    }
  }
  Fk4.CompositePropagator = gk4;
});

// Register to shared state
__$.Uk4 = Uk4;

// Module: H36
// Dependencies: ck4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H36 = v(ok4 => {
  Object.defineProperty(ok4, "__esModule", {
    value: !0
  });
  ok4.TraceState = void 0;
  var lk4 = __$.ck4(),
    ik4 = 32,
    HX9 = 512,
    nk4 = ",",
    rk4 = "=";
  class w36 {
    _internalState = new Map();
    constructor(A) {
      if (A) this._parse(A);
    }
    set(A, K) {
      let q = this._clone();
      if (q._internalState.has(A)) q._internalState.delete(A);
      return q._internalState.set(A, K), q;
    }
    unset(A) {
      let K = this._clone();
      return K._internalState.delete(A), K;
    }
    get(A) {
      return this._internalState.get(A);
    }
    serialize() {
      return this._keys().reduce((A, K) => {
        return A.push(K + rk4 + this.get(K)), A;
      }, []).join(nk4);
    }
    _parse(A) {
      if (A.length > HX9) return;
      if (this._internalState = A.split(nk4).reverse().reduce((K, q) => {
        let Y = q.trim(),
          z = Y.indexOf(rk4);
        if (z !== -1) {
          let w = Y.slice(0, z),
            H = Y.slice(z + 1, q.length);
          if ((0, lk4.validateKey)(w) && (0, lk4.validateValue)(H)) K.set(w, H);
        }
        return K;
      }, new Map()), this._internalState.size > ik4) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, ik4));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let A = new w36();
      return A._internalState = new Map(this._internalState), A;
    }
  }
  ok4.TraceState = w36;
});

// Register to shared state
__$.H36 = H36;

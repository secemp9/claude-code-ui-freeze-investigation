// Module: MD4
// Dependencies: $D4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MD4 = v(DD4 => {
  Object.defineProperty(DD4, "__esModule", {
    value: !0
  });
  DD4.TraceStateImpl = void 0;
  var _D4 = __$.$D4(),
    GD4 = 32,
    g79 = 512,
    ZD4 = ",",
    WD4 = "=";
  class v56 {
    constructor(A) {
      if (this._internalState = new Map(), A) this._parse(A);
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
        return A.push(K + WD4 + this.get(K)), A;
      }, []).join(ZD4);
    }
    _parse(A) {
      if (A.length > g79) return;
      if (this._internalState = A.split(ZD4).reverse().reduce((K, q) => {
        let Y = q.trim(),
          z = Y.indexOf(WD4);
        if (z !== -1) {
          let w = Y.slice(0, z),
            H = Y.slice(z + 1, q.length);
          if ((0, _D4.validateKey)(w) && (0, _D4.validateValue)(H)) K.set(w, H);
        }
        return K;
      }, new Map()), this._internalState.size > GD4) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, GD4));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let A = new v56();
      return A._internalState = new Map(this._internalState), A;
    }
  }
  DD4.TraceStateImpl = v56;
});

// Register to shared state
__$.MD4 = MD4;

// Module: xr
// Dependencies: FIA, jI4, Y96, WY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xr = v(LD9 => {
  var TI4 = __$.FIA(),
    ED9 = __$.jI4(),
    kD9 = __$.Y96(),
    F91 = __$.WY();
  function CD9(A, K, q) {
    let Y = TI4.createNode(A, void 0, q),
      z = TI4.createNode(K, void 0, q);
    return new Q91(Y, z);
  }
  class Q91 {
    constructor(A, K = null) {
      Object.defineProperty(this, F91.NODE_TYPE, {
        value: F91.PAIR
      }), this.key = A, this.value = K;
    }
    clone(A) {
      let {
        key: K,
        value: q
      } = this;
      if (F91.isNode(K)) K = K.clone(A);
      if (F91.isNode(q)) q = q.clone(A);
      return new Q91(K, q);
    }
    toJSON(A, K) {
      let q = K?.mapAsMap ? new Map() : {};
      return kD9.addPairToJSMap(K, q, this);
    }
    toString(A, K, q) {
      return A?.doc ? ED9.stringifyPair(this, A, K, q) : JSON.stringify(this);
    }
  }
  LD9.Pair = Q91;
  LD9.createPair = CD9;
});

// Register to shared state
__$.xr = xr;

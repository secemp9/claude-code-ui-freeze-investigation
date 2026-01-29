// Module: k3K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var k3K = v((StH, E3K) => {
  E3K.exports = class extends Array {
    constructor(K) {
      super(K && K.length || 0);
      if (K) for (var q in K) this[q] = K[q];
    }
    item(K) {
      return this[K] || null;
    }
  };
});

// Register to shared state
__$.k3K = k3K;

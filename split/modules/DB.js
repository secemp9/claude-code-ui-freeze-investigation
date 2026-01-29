// Module: DB
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DB = v(($_H, VE7) => {
  class yf6 {
    constructor(A) {
      let K = {},
        q = this._getOverriddenMethods(this, K);
      for (let Y of Object.keys(q)) if (typeof q[Y] === "function") K[Y] = A[Y], A[Y] = q[Y];
    }
    _getOverriddenMethods() {
      throw Error("Not implemented");
    }
  }
  yf6.install = function (A, K, q) {
    if (!A.__mixins) A.__mixins = [];
    for (let z = 0; z < A.__mixins.length; z++) if (A.__mixins[z].constructor === K) return A.__mixins[z];
    let Y = new K(A, q);
    return A.__mixins.push(Y), Y;
  };
  VE7.exports = yf6;
});

// Register to shared state
__$.DB = DB;

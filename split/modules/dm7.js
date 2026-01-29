// Module: dm7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dm7 = v((OTH, pm7) => {
  pm7.exports = OD1;
  function OD1() {
    this._listeners = {};
  }
  OD1.prototype.on = function (K, q, Y) {
    return (this._listeners[K] || (this._listeners[K] = [])).push({
      fn: q,
      ctx: Y || this
    }), this;
  };
  OD1.prototype.off = function (K, q) {
    if (K === void 0) this._listeners = {};else if (q === void 0) this._listeners[K] = [];else {
      var Y = this._listeners[K];
      for (var z = 0; z < Y.length;) if (Y[z].fn === q) Y.splice(z, 1);else ++z;
    }
    return this;
  };
  OD1.prototype.emit = function (K) {
    var q = this._listeners[K];
    if (q) {
      var Y = [],
        z = 1;
      for (; z < arguments.length;) Y.push(arguments[z++]);
      for (z = 0; z < q.length;) q[z].fn.apply(q[z++].ctx, Y);
    }
    return this;
  };
});

// Register to shared state
__$.dm7 = dm7;

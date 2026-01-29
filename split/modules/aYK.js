// Module: aYK
// Dependencies: aV1, Ob6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aYK = v((MeH, oYK) => {
  var Vv2 = __$.aV1(),
    fv2 = __$.Ob6();
  oYK.exports = Tb6;
  function Tb6(A, K) {
    this._window = A, this._href = K;
  }
  Tb6.prototype = Object.create(fv2.prototype, {
    constructor: {
      value: Tb6
    },
    href: {
      get: function () {
        return this._href;
      },
      set: function (A) {
        this.assign(A);
      }
    },
    assign: {
      value: function (A) {
        var K = new Vv2(this._href),
          q = K.resolve(A);
        this._href = q;
      }
    },
    replace: {
      value: function (A) {
        this.assign(A);
      }
    },
    reload: {
      value: function () {
        this.assign(this.href);
      }
    },
    toString: {
      value: function () {
        return this.href;
      }
    }
  });
});

// Register to shared state
__$.aYK = aYK;

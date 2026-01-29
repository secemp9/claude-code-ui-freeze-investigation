// Module: oe7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oe7 = v((ne7, re7) => {
  (function () {
    var A;
    re7.exports = A = function () {
      class K {
        constructor(q) {
          this.arr = q || [];
        }
        item(q) {
          return this.arr[q] || null;
        }
        contains(q) {
          return this.arr.indexOf(q) !== -1;
        }
      }
      return Object.defineProperty(K.prototype, "length", {
        get: function () {
          return this.arr.length;
        }
      }), K;
    }.call(this);
  }).call(ne7);
});

// Register to shared state
__$.oe7 = oe7;

// Module: uAK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uAK = v((bAK, xAK) => {
  (function () {
    var A;
    xAK.exports = A = function () {
      class K {
        constructor(q) {
          this.nodes = q;
        }
        clone() {
          return this.nodes = null;
        }
        item(q) {
          return this.nodes[q] || null;
        }
      }
      return Object.defineProperty(K.prototype, "length", {
        get: function () {
          return this.nodes.length || 0;
        }
      }), K;
    }.call(this);
  }).call(bAK);
});

// Register to shared state
__$.uAK = uAK;

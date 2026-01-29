// Module: Bh6
// Dependencies: RW

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bh6 = v((QtH, a3K) => {
  var o3K = __$.RW(),
    lN2 = {
      nextElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var A = this.nextSibling; A !== null; A = A.nextSibling) if (A.nodeType === o3K.ELEMENT_NODE) return A;
          }
          return null;
        }
      },
      previousElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var A = this.previousSibling; A !== null; A = A.previousSibling) if (A.nodeType === o3K.ELEMENT_NODE) return A;
          }
          return null;
        }
      }
    };
  a3K.exports = lN2;
});

// Register to shared state
__$.Bh6 = Bh6;

// Module: lM1
// Dependencies: lR6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lM1 = v((nAK, rAK) => {
  (function () {
    var A, K;
    K = __$.lR6(), rAK.exports = A = class extends K {
      constructor(Y) {
        super(Y);
      }
      document(Y, z) {
        var w, H, J, O, X;
        z = this.filterOptions(z), O = "", X = Y.children;
        for (H = 0, J = X.length; H < J; H++) w = X[H], O += this.writeChildNode(w, z, 0);
        if (z.pretty && O.slice(-z.newline.length) === z.newline) O = O.slice(0, -z.newline.length);
        return O;
      }
    };
  }).call(nAK);
});

// Register to shared state
__$.lM1 = lM1;

// Module: Ry7
// Dependencies: ky7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ry7 = v((EDH, Ly7) => {
  var Cy7 = __$.ky7();
  Ly7.exports = function (K, q) {
    if (K) {
      q.then(function (Y) {
        Cy7(function () {
          K(null, Y);
        });
      }, function (Y) {
        Cy7(function () {
          K(Y);
        });
      });
      return;
    } else return q;
  };
});

// Register to shared state
__$.Ry7 = Ry7;

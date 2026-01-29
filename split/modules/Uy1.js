// Module: Uy1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uy1 = v((Q_z, et6) => {
  et6.exports = GAq;
  function GAq(A, K) {
    var q = !Array.isArray(A),
      Y = {
        index: 0,
        keyedList: q || K ? Object.keys(A) : null,
        jobs: {},
        results: q ? {} : [],
        size: q ? Object.keys(A).length : A.length
      };
    if (K) Y.keyedList.sort(q ? K : function (z, w) {
      return K(A[z], A[w]);
    });
    return Y;
  }
});

// Register to shared state
__$.Uy1 = Uy1;

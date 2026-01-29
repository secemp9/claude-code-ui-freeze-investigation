// Module: qe6
// Dependencies: Qy1, Uy1, py1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qe6 = v((p_z, Ke6) => {
  var jAq = __$.Qy1(),
    MAq = __$.Uy1(),
    PAq = __$.py1();
  Ke6.exports = VAq;
  function VAq(A, K, q) {
    var Y = MAq(A);
    while (Y.index < (Y.keyedList || A).length) jAq(A, K, Y, function (z, w) {
      if (z) {
        q(z, w);
        return;
      }
      if (Object.keys(Y.jobs).length === 0) {
        q(null, Y.results);
        return;
      }
    }), Y.index++;
    return PAq.bind(Y, q);
  }
});

// Register to shared state
__$.qe6 = qe6;

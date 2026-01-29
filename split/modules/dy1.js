// Module: dy1
// Dependencies: Qy1, Uy1, py1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dy1 = v((d_z, mrA) => {
  var Ye6 = __$.Qy1(),
    fAq = __$.Uy1(),
    NAq = __$.py1();
  mrA.exports = TAq;
  mrA.exports.ascending = ze6;
  mrA.exports.descending = vAq;
  function TAq(A, K, q, Y) {
    var z = fAq(A, q);
    return Ye6(A, K, z, function w(H, J) {
      if (H) {
        Y(H, J);
        return;
      }
      if (z.index++, z.index < (z.keyedList || A).length) {
        Ye6(A, K, z, w);
        return;
      }
      Y(null, z.results);
    }), NAq.bind(z, Y);
  }
  function ze6(A, K) {
    return A < K ? -1 : A > K ? 1 : 0;
  }
  function vAq(A, K) {
    return -1 * ze6(A, K);
  }
});

// Register to shared state
__$.dy1 = dy1;

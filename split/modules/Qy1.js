// Module: Qy1
// Dependencies: gy1, Fy1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qy1 = v((F_z, tt6) => {
  var st6 = __$.gy1(),
    XAq = __$.Fy1();
  tt6.exports = $Aq;
  function $Aq(A, K, q, Y) {
    var z = q.keyedList ? q.keyedList[q.index] : q.index;
    q.jobs[z] = _Aq(K, z, A[z], function (w, H) {
      if (!(z in q.jobs)) return;
      if (delete q.jobs[z], w) XAq(q);else q.results[z] = H;
      Y(w, q.results);
    });
  }
  function _Aq(A, K, q, Y) {
    var z;
    if (A.length == 2) z = A(q, st6(Y));else z = A(q, K, st6(Y));
    return z;
  }
});

// Register to shared state
__$.Qy1 = Qy1;

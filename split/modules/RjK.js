// Module: RjK
// Dependencies: ag6, Ug6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RjK = v(kU2 => {
  var vU2 = __$.ag6(),
    EU2 = __$.Ug6();
  kU2.process = function (A, K) {
    let q = [],
      Y = new vU2(A);
    return new EU2(K, {
      read: Y.read.bind(Y),
      write: function (w) {
        q.push(w);
      },
      complete: function () {}
    }).start(), Y.process(), Buffer.concat(q);
  };
});

// Register to shared state
__$.RjK = RjK;

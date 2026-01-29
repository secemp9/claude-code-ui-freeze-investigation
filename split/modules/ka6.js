// Module: ka6
// Dependencies: va6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ka6 = v((C0z, Ea6) => {
  var QR1 = CA("fs"),
    KsK = __$.va6();
  function qsK(A) {
    let q = Buffer.alloc(150),
      Y;
    try {
      Y = QR1.openSync(A, "r"), QR1.readSync(Y, q, 0, 150, 0), QR1.closeSync(Y);
    } catch (z) {}
    return KsK(q.toString());
  }
  Ea6.exports = qsK;
});

// Register to shared state
__$.ka6 = ka6;

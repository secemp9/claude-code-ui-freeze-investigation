// Module: Oz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oz8 = v((UWq, ib1) => {
  var Jz8 = Symbol();
  function FWq(A, K, q) {
    let Y = K[Jz8];
    if (Y) return K.stat(A, (w, H) => {
      if (w) return q(w);
      q(null, H.mtime, Y);
    });
    let z = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
    K.utimes(A, z, z, w => {
      if (w) return q(w);
      K.stat(A, (H, J) => {
        if (H) return q(H);
        let O = J.mtime.getTime() % 1000 === 0 ? "s" : "ms";
        Object.defineProperty(K, Jz8, {
          value: O
        }), q(null, J.mtime, O);
      });
    });
  }
  function QWq(A) {
    let K = Date.now();
    if (A === "s") K = Math.ceil(K / 1000) * 1000;
    return new Date(K);
  }
  UWq.probe = FWq;
  UWq.getMtime = QWq;
});

// Register to shared state
__$.Oz8 = Oz8;

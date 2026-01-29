// Module: EB1
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EB1 = v(rM8 => {
  Object.defineProperty(rM8, "__esModule", {
    value: !0
  });
  var Mgq = __$.H8();
  function Pgq(A, K, q = () => {}) {
    let Y;
    try {
      Y = A();
    } catch (z) {
      throw K(z), q(), z;
    }
    return Vgq(Y, K, q);
  }
  function Vgq(A, K, q) {
    if (Mgq.isThenable(A)) return A.then(Y => {
      return q(), Y;
    }, Y => {
      throw K(Y), q(), Y;
    });
    return q(), A;
  }
  rM8.handleCallbackErrors = Pgq;
});

// Register to shared state
__$.EB1 = EB1;

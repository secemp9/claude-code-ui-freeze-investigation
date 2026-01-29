// Module: kZ1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kZ1 = v(FC7 => {
  Object.defineProperty(FC7, "__esModule", {
    value: !0
  });
  FC7.getDeepKeys = FC7.toJSON = void 0;
  var AcY = ["function", "symbol", "undefined"],
    KcY = ["constructor", "prototype", "__proto__"],
    qcY = Object.getPrototypeOf({});
  function YcY() {
    let A = {},
      K = this;
    for (let q of gC7(K)) if (typeof q === "string") {
      let Y = K[q],
        z = typeof Y;
      if (!AcY.includes(z)) A[q] = Y;
    }
    return A;
  }
  FC7.toJSON = YcY;
  function gC7(A, K = []) {
    let q = [];
    while (A && A !== qcY) q = q.concat(Object.getOwnPropertyNames(A), Object.getOwnPropertySymbols(A)), A = Object.getPrototypeOf(A);
    let Y = new Set(q);
    for (let z of K.concat(KcY)) Y.delete(z);
    return Y;
  }
  FC7.getDeepKeys = gC7;
});

// Register to shared state
__$.kZ1 = kZ1;

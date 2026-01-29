// Module: BY6
// Dependencies: xY6, Cx4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BY6 = v((pjw, Lx4) => {
  var uY6 = __$.xY6(),
    kk9 = __$.Cx4(),
    I$A = {},
    Ck9 = Object.keys(uY6);
  function Lk9(A) {
    let K = function (...q) {
      let Y = q[0];
      if (Y === void 0 || Y === null) return Y;
      if (Y.length > 1) q = Y;
      return A(q);
    };
    if ("conversion" in A) K.conversion = A.conversion;
    return K;
  }
  function Rk9(A) {
    let K = function (...q) {
      let Y = q[0];
      if (Y === void 0 || Y === null) return Y;
      if (Y.length > 1) q = Y;
      let z = A(q);
      if (typeof z === "object") for (let w = z.length, H = 0; H < w; H++) z[H] = Math.round(z[H]);
      return z;
    };
    if ("conversion" in A) K.conversion = A.conversion;
    return K;
  }
  Ck9.forEach(A => {
    I$A[A] = {}, Object.defineProperty(I$A[A], "channels", {
      value: uY6[A].channels
    }), Object.defineProperty(I$A[A], "labels", {
      value: uY6[A].labels
    });
    let K = kk9(A);
    Object.keys(K).forEach(Y => {
      let z = K[Y];
      I$A[A][Y] = Rk9(z), I$A[A][Y].raw = Lk9(z);
    });
  });
  Lx4.exports = I$A;
});

// Register to shared state
__$.BY6 = BY6;

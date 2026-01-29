// Module: Cx4
// Dependencies: xY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cx4 = v((Ujw, kx4) => {
  var uY1 = __$.xY6();
  function Nk9() {
    let A = {},
      K = Object.keys(uY1);
    for (let q = K.length, Y = 0; Y < q; Y++) A[K[Y]] = {
      distance: -1,
      parent: null
    };
    return A;
  }
  function Tk9(A) {
    let K = Nk9(),
      q = [A];
    K[A].distance = 0;
    while (q.length) {
      let Y = q.pop(),
        z = Object.keys(uY1[Y]);
      for (let w = z.length, H = 0; H < w; H++) {
        let J = z[H],
          O = K[J];
        if (O.distance === -1) O.distance = K[Y].distance + 1, O.parent = Y, q.unshift(J);
      }
    }
    return K;
  }
  function vk9(A, K) {
    return function (q) {
      return K(A(q));
    };
  }
  function Ek9(A, K) {
    let q = [K[A].parent, A],
      Y = uY1[K[A].parent][A],
      z = K[A].parent;
    while (K[z].parent) q.unshift(K[z].parent), Y = vk9(uY1[K[z].parent][z], Y), z = K[z].parent;
    return Y.conversion = q, Y;
  }
  kx4.exports = function (A) {
    let K = Tk9(A),
      q = {},
      Y = Object.keys(K);
    for (let z = Y.length, w = 0; w < z; w++) {
      let H = Y[w];
      if (K[H].parent === null) continue;
      q[H] = Ek9(H, K);
    }
    return q;
  };
});

// Register to shared state
__$.Cx4 = Cx4;

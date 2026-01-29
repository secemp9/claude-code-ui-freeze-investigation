// Module: HkK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HkK = v(Gt2 => {
  function $t2(A, K) {
    if (Math.abs(A.length - K.length) > 3) return Math.max(A.length, K.length);
    let q = [];
    for (let Y = 0; Y <= A.length; Y++) q[Y] = [Y];
    for (let Y = 0; Y <= K.length; Y++) q[0][Y] = Y;
    for (let Y = 1; Y <= K.length; Y++) for (let z = 1; z <= A.length; z++) {
      let w = 1;
      if (A[z - 1] === K[Y - 1]) w = 0;else w = 1;
      if (q[z][Y] = Math.min(q[z - 1][Y] + 1, q[z][Y - 1] + 1, q[z - 1][Y - 1] + w), z > 1 && Y > 1 && A[z - 1] === K[Y - 2] && A[z - 2] === K[Y - 1]) q[z][Y] = Math.min(q[z][Y], q[z - 2][Y - 2] + 1);
    }
    return q[A.length][K.length];
  }
  function _t2(A, K) {
    if (!K || K.length === 0) return "";
    K = Array.from(new Set(K));
    let q = A.startsWith("--");
    if (q) A = A.slice(2), K = K.map(H => H.slice(2));
    let Y = [],
      z = 3,
      w = 0.4;
    if (K.forEach(H => {
      if (H.length <= 1) return;
      let J = $t2(A, H),
        O = Math.max(A.length, H.length);
      if ((O - J) / O > w) {
        if (J < z) z = J, Y = [H];else if (J === z) Y.push(H);
      }
    }), Y.sort((H, J) => H.localeCompare(J)), q) Y = Y.map(H => `--${H}`);
    if (Y.length > 1) return `
(Did you mean one of ${Y.join(", ")}?)`;
    if (Y.length === 1) return `
(Did you mean ${Y[0]}?)`;
    return "";
  }
  Gt2.suggestSimilar = _t2;
});

// Register to shared state
__$.HkK = HkK;

// Module: zvA
// Dependencies: SE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zvA = v(RW8 => {
  Object.defineProperty(RW8, "__esModule", {
    value: !0
  });
  var wsA = __$.SE();
  function Dkq(A, K = 0) {
    if (typeof A !== "string" || K === 0) return A;
    return A.length <= K ? A : `${A.slice(0, K)}...`;
  }
  function jkq(A, K) {
    let q = A,
      Y = q.length;
    if (Y <= 150) return q;
    if (K > Y) K = Y;
    let z = Math.max(K - 60, 0);
    if (z < 5) z = 0;
    let w = Math.min(z + 140, Y);
    if (w > Y - 5) w = Y;
    if (w === Y) z = Math.max(w - 140, 0);
    if (q = q.slice(z, w), z > 0) q = `'{snip} ${q}`;
    if (w < Y) q += " {snip}";
    return q;
  }
  function Mkq(A, K) {
    if (!Array.isArray(A)) return "";
    let q = [];
    for (let Y = 0; Y < A.length; Y++) {
      let z = A[Y];
      try {
        if (wsA.isVueViewModel(z)) q.push("[VueViewModel]");else q.push(String(z));
      } catch (w) {
        q.push("[value cannot be serialized]");
      }
    }
    return q.join(K);
  }
  function LW8(A, K, q = !1) {
    if (!wsA.isString(A)) return !1;
    if (wsA.isRegExp(K)) return K.test(A);
    if (wsA.isString(K)) return q ? A === K : A.includes(K);
    return !1;
  }
  function Pkq(A, K = [], q = !1) {
    return K.some(Y => LW8(A, Y, q));
  }
  RW8.isMatchingPattern = LW8;
  RW8.safeJoin = Mkq;
  RW8.snipLine = jkq;
  RW8.stringMatchesSomePattern = Pkq;
  RW8.truncate = Dkq;
});

// Register to shared state
__$.zvA = zvA;

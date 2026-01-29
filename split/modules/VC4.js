// Module: VC4
// Dependencies: GC4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VC4 = v(MC4 => {
  Object.defineProperty(MC4, "__esModule", {
    value: !0
  });
  MC4.merge = void 0;
  var ZC4 = __$.GC4(),
    xX9 = 20;
  function uX9(...A) {
    let K = A.shift(),
      q = new WeakMap();
    while (A.length > 0) K = DC4(K, A.shift(), 0, q);
    return K;
  }
  MC4.merge = uX9;
  function O36(A) {
    if (Y91(A)) return A.slice();
    return A;
  }
  function DC4(A, K, q = 0, Y) {
    let z;
    if (q > xX9) return;
    if (q++, q91(A) || q91(K) || jC4(K)) z = O36(K);else if (Y91(A)) {
      if (z = A.slice(), Y91(K)) for (let w = 0, H = K.length; w < H; w++) z.push(O36(K[w]));else if (kIA(K)) {
        let w = Object.keys(K);
        for (let H = 0, J = w.length; H < J; H++) {
          let O = w[H];
          z[O] = O36(K[O]);
        }
      }
    } else if (kIA(A)) if (kIA(K)) {
      if (!BX9(A, K)) return K;
      z = Object.assign({}, A);
      let w = Object.keys(K);
      for (let H = 0, J = w.length; H < J; H++) {
        let O = w[H],
          X = K[O];
        if (q91(X)) {
          if (typeof X > "u") delete z[O];else z[O] = X;
        } else {
          let $ = z[O],
            _ = X;
          if (WC4(A, O, Y) || WC4(K, O, Y)) delete z[O];else {
            if (kIA($) && kIA(_)) {
              let G = Y.get($) || [],
                Z = Y.get(_) || [];
              G.push({
                obj: A,
                key: O
              }), Z.push({
                obj: K,
                key: O
              }), Y.set($, G), Y.set(_, Z);
            }
            z[O] = DC4(z[O], X, q, Y);
          }
        }
      }
    } else z = K;
    return z;
  }
  function WC4(A, K, q) {
    let Y = q.get(A[K]) || [];
    for (let z = 0, w = Y.length; z < w; z++) {
      let H = Y[z];
      if (H.key === K && H.obj === A) return !0;
    }
    return !1;
  }
  function Y91(A) {
    return Array.isArray(A);
  }
  function jC4(A) {
    return typeof A === "function";
  }
  function kIA(A) {
    return !q91(A) && !Y91(A) && !jC4(A) && typeof A === "object";
  }
  function q91(A) {
    return typeof A === "string" || typeof A === "number" || typeof A === "boolean" || typeof A > "u" || A instanceof Date || A instanceof RegExp || A === null;
  }
  function BX9(A, K) {
    if (!(0, ZC4.isPlainObject)(A) || !(0, ZC4.isPlainObject)(K)) return !1;
    return !0;
  }
});

// Register to shared state
__$.VC4 = VC4;

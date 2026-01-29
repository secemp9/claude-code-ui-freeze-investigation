// Module: RL7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RL7 = v(NlY => {
  NlY.all = function (A) {
    return Object.keys(A).filter(K => {
      return typeof A[K] === "object";
    }).map(K => {
      return A[K].name = K, A[K];
    });
  };
  NlY.filter = function (A, K, q) {
    return A.filter(Y => {
      return !!LL7(Y, K, q);
    });
  };
  NlY.sort = function (A) {
    for (let K of A) K.order = K.order || Number.MAX_SAFE_INTEGER;
    return A.sort((K, q) => {
      return K.order - q.order;
    });
  };
  NlY.run = function (A, K, q, Y) {
    let z,
      w,
      H = 0;
    return new Promise((J, O) => {
      X();
      function X() {
        if (z = A[H++], !z) return O(w);
        try {
          let Z = LL7(z, K, q, $, Y);
          if (Z && typeof Z.then === "function") Z.then(_, G);else if (Z !== void 0) _(Z);else if (H === A.length) throw Error("No promise has been returned or callback has been called.");
        } catch (Z) {
          G(Z);
        }
      }
      function $(Z, W) {
        if (Z) G(Z);else _(W);
      }
      function _(Z) {
        J({
          plugin: z,
          result: Z
        });
      }
      function G(Z) {
        w = {
          plugin: z,
          error: Z
        }, X();
      }
    });
  };
  function LL7(A, K, q, Y, z) {
    let w = A[K];
    if (typeof w === "function") return w.apply(A, [q, Y, z]);
    if (!Y) {
      if (w instanceof RegExp) return w.test(q.url);else if (typeof w === "string") return w === q.extension;else if (Array.isArray(w)) return w.indexOf(q.extension) !== -1;
    }
    return w;
  }
});

// Register to shared state
__$.RL7 = RL7;

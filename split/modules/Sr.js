// Module: Sr
// Dependencies: WY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sr = v(KW9 => {
  var AW9 = __$.WY();
  function wI4(A, K, q) {
    if (Array.isArray(A)) return A.map((Y, z) => wI4(Y, String(z), q));
    if (A && typeof A.toJSON === "function") {
      if (!q || !AW9.hasAnchor(A)) return A.toJSON(K, q);
      let Y = {
        aliasCount: 0,
        count: 1,
        res: void 0
      };
      q.anchors.set(A, Y), q.onCreate = w => {
        Y.res = w, delete q.onCreate;
      };
      let z = A.toJSON(K, q);
      if (q.onCreate) q.onCreate(z);
      return z;
    }
    if (typeof A === "bigint" && !q?.keep) return Number(A);
    return A;
  }
  KW9.toJS = wI4;
});

// Register to shared state
__$.Sr = Sr;

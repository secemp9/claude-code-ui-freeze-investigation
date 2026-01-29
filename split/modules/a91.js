// Module: a91
// Dependencies: WY, xr, q$, mr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a91 = v(ej9 => {
  var o91 = __$.WY(),
    W96 = __$.xr(),
    aj9 = __$.q$(),
    sj9 = __$.mr();
  function BI4(A, K) {
    if (o91.isSeq(A)) for (let q = 0; q < A.items.length; ++q) {
      let Y = A.items[q];
      if (o91.isPair(Y)) continue;else if (o91.isMap(Y)) {
        if (Y.items.length > 1) K("Each pair must have its own sequence indicator");
        let z = Y.items[0] || new W96.Pair(new aj9.Scalar(null));
        if (Y.commentBefore) z.key.commentBefore = z.key.commentBefore ? `${Y.commentBefore}
${z.key.commentBefore}` : Y.commentBefore;
        if (Y.comment) {
          let w = z.value ?? z.key;
          w.comment = w.comment ? `${Y.comment}
${w.comment}` : Y.comment;
        }
        Y = z;
      }
      A.items[q] = o91.isPair(Y) ? Y : new W96.Pair(Y);
    } else K("Expected a sequence for this tag");
    return A;
  }
  function mI4(A, K, q) {
    let {
        replacer: Y
      } = q,
      z = new sj9.YAMLSeq(A);
    z.tag = "tag:yaml.org,2002:pairs";
    let w = 0;
    if (K && Symbol.iterator in Object(K)) for (let H of K) {
      if (typeof Y === "function") H = Y.call(K, String(w++), H);
      let J, O;
      if (Array.isArray(H)) {
        if (H.length === 2) J = H[0], O = H[1];else throw TypeError(`Expected [key, value] tuple: ${H}`);
      } else if (H && H instanceof Object) {
        let X = Object.keys(H);
        if (X.length === 1) J = X[0], O = H[J];else throw TypeError(`Expected tuple with one key, not ${X.length} keys`);
      } else J = H;
      z.items.push(W96.createPair(J, O, q));
    }
    return z;
  }
  var tj9 = {
    collection: "seq",
    default: !1,
    tag: "tag:yaml.org,2002:pairs",
    resolve: BI4,
    createNode: mI4
  };
  ej9.createPairs = mI4;
  ej9.pairs = tj9;
  ej9.resolvePairs = BI4;
});

// Register to shared state
__$.a91 = a91;

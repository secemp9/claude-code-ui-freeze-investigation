// Module: y91
// Dependencies: WY, BIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var y91 = v(nZ9 => {
  var qI4 = __$.WY(),
    cZ9 = __$.BIA();
  function lZ9(A) {
    if (/[\x00-\x19\s,[\]{}]/.test(A)) {
      let q = `Anchor must not contain whitespace or control characters: ${JSON.stringify(A)}`;
      throw Error(q);
    }
    return !0;
  }
  function YI4(A) {
    let K = new Set();
    return cZ9.visit(A, {
      Value(q, Y) {
        if (Y.anchor) K.add(Y.anchor);
      }
    }), K;
  }
  function zI4(A, K) {
    for (let q = 1;; ++q) {
      let Y = `${A}${q}`;
      if (!K.has(Y)) return Y;
    }
  }
  function iZ9(A, K) {
    let q = [],
      Y = new Map(),
      z = null;
    return {
      onAnchor: w => {
        q.push(w), z ?? (z = YI4(A));
        let H = zI4(K, z);
        return z.add(H), H;
      },
      setAnchors: () => {
        for (let w of q) {
          let H = Y.get(w);
          if (typeof H === "object" && H.anchor && (qI4.isScalar(H.node) || qI4.isCollection(H.node))) H.node.anchor = H.anchor;else {
            let J = Error("Failed to resolve repeated object (this should not happen)");
            throw J.source = w, J;
          }
        }
      },
      sourceObjects: Y
    };
  }
  nZ9.anchorIsValid = lZ9;
  nZ9.anchorNames = YI4;
  nZ9.createNodeAnchors = iZ9;
  nZ9.findNewAnchor = zI4;
});

// Register to shared state
__$.y91 = y91;

// Module: Y31
// Dependencies: LD, nyA, uk, oyA, lyA, s51, e51, t51

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y31 = v((UYw, X_4) => {
  var lA9 = __$.LD(),
    O_4 = __$.nyA(),
    {
      ANY: iA9
    } = O_4,
    nA9 = __$.uk(),
    rA9 = __$.oyA(),
    H_4 = __$.lyA(),
    J_4 = __$.s51(),
    oA9 = __$.e51(),
    aA9 = __$.t51(),
    sA9 = (A, K, q, Y) => {
      A = new lA9(A, Y), K = new nA9(K, Y);
      let z, w, H, J, O;
      switch (q) {
        case ">":
          z = H_4, w = oA9, H = J_4, J = ">", O = ">=";
          break;
        case "<":
          z = J_4, w = aA9, H = H_4, J = "<", O = "<=";
          break;
        default:
          throw TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (rA9(A, K, Y)) return !1;
      for (let X = 0; X < K.set.length; ++X) {
        let $ = K.set[X],
          _ = null,
          G = null;
        if ($.forEach(Z => {
          if (Z.semver === iA9) Z = new O_4(">=0.0.0");
          if (_ = _ || Z, G = G || Z, z(Z.semver, _.semver, Y)) _ = Z;else if (H(Z.semver, G.semver, Y)) G = Z;
        }), _.operator === J || _.operator === O) return !1;
        if ((!G.operator || G.operator === J) && w(A, G.semver)) return !1;else if (G.operator === O && H(A, G.semver)) return !1;
      }
      return !0;
    };
  X_4.exports = sA9;
});

// Register to shared state
__$.Y31 = Y31;

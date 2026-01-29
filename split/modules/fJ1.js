// Module: fJ1
// Dependencies: QD, ZxA, NC, DxA, _xA, WJ1, jJ1, DJ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fJ1 = v((Kgw, N77) => {
  var sqY = __$.QD(),
    f77 = __$.ZxA(),
    {
      ANY: tqY
    } = f77,
    eqY = __$.NC(),
    A5Y = __$.DxA(),
    P77 = __$._xA(),
    V77 = __$.WJ1(),
    K5Y = __$.jJ1(),
    q5Y = __$.DJ1(),
    Y5Y = (A, K, q, Y) => {
      A = new sqY(A, Y), K = new eqY(K, Y);
      let z, w, H, J, O;
      switch (q) {
        case ">":
          z = P77, w = K5Y, H = V77, J = ">", O = ">=";
          break;
        case "<":
          z = V77, w = q5Y, H = P77, J = "<", O = "<=";
          break;
        default:
          throw TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (A5Y(A, K, Y)) return !1;
      for (let X = 0; X < K.set.length; ++X) {
        let $ = K.set[X],
          _ = null,
          G = null;
        if ($.forEach(Z => {
          if (Z.semver === tqY) Z = new f77(">=0.0.0");
          if (_ = _ || Z, G = G || Z, z(Z.semver, _.semver, Y)) _ = Z;else if (H(Z.semver, G.semver, Y)) G = Z;
        }), _.operator === J || _.operator === O) return !1;
        if ((!G.operator || G.operator === J) && w(A, G.semver)) return !1;else if (G.operator === O && H(A, G.semver)) return !1;
      }
      return !0;
    };
  N77.exports = Y5Y;
});

// Register to shared state
__$.fJ1 = fJ1;

// Module: Y_4
// Dependencies: LD, uk, lyA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y_4 = v((FYw, q_4) => {
  var Yq6 = __$.LD(),
    UA9 = __$.uk(),
    K_4 = __$.lyA(),
    pA9 = (A, K) => {
      A = new UA9(A, K);
      let q = new Yq6("0.0.0");
      if (A.test(q)) return q;
      if (q = new Yq6("0.0.0-0"), A.test(q)) return q;
      q = null;
      for (let Y = 0; Y < A.set.length; ++Y) {
        let z = A.set[Y],
          w = null;
        if (z.forEach(H => {
          let J = new Yq6(H.semver.version);
          switch (H.operator) {
            case ">":
              if (J.prerelease.length === 0) J.patch++;else J.prerelease.push(0);
              J.raw = J.format();
            case "":
            case ">=":
              if (!w || K_4(J, w)) w = J;
              break;
            case "<":
            case "<=":
              break;
            default:
              throw Error(`Unexpected operation: ${H.operator}`);
          }
        }), w && (!q || K_4(q, w))) q = w;
      }
      if (q && A.test(q)) return q;
      return null;
    };
  q_4.exports = pA9;
});

// Register to shared state
__$.Y_4 = Y_4;

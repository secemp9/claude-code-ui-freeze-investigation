// Module: D77
// Dependencies: QD, NC, _xA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D77 = v((emw, W77) => {
  var j$6 = __$.QD(),
    nqY = __$.NC(),
    Z77 = __$._xA(),
    rqY = (A, K) => {
      A = new nqY(A, K);
      let q = new j$6("0.0.0");
      if (A.test(q)) return q;
      if (q = new j$6("0.0.0-0"), A.test(q)) return q;
      q = null;
      for (let Y = 0; Y < A.set.length; ++Y) {
        let z = A.set[Y],
          w = null;
        if (z.forEach(H => {
          let J = new j$6(H.semver.version);
          switch (H.operator) {
            case ">":
              if (J.prerelease.length === 0) J.patch++;else J.prerelease.push(0);
              J.raw = J.format();
            case "":
            case ">=":
              if (!w || Z77(J, w)) w = J;
              break;
            case "<":
            case "<=":
              break;
            default:
              throw Error(`Unexpected operation: ${H.operator}`);
          }
        }), w && (!q || Z77(q, w))) q = w;
      }
      if (q && A.test(q)) return q;
      return null;
    };
  W77.exports = rqY;
});

// Register to shared state
__$.D77 = D77;

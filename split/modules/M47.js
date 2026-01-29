// Module: M47
// Dependencies: bKA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M47 = v((Lmw, j47) => {
  var D47 = __$.bKA(),
    yKY = (A, K) => {
      let q = D47(A, null, !0),
        Y = D47(K, null, !0),
        z = q.compare(Y);
      if (z === 0) return null;
      let w = z > 0,
        H = w ? q : Y,
        J = w ? Y : q,
        O = !!H.prerelease.length;
      if (!!J.prerelease.length && !O) {
        if (!J.patch && !J.minor) return "major";
        if (J.compareMain(H) === 0) {
          if (J.minor && !J.patch) return "minor";
          return "patch";
        }
      }
      let $ = O ? "pre" : "";
      if (q.major !== Y.major) return $ + "major";
      if (q.minor !== Y.minor) return $ + "minor";
      if (q.patch !== Y.patch) return $ + "patch";
      return "prerelease";
    };
  j47.exports = yKY;
});

// Register to shared state
__$.M47 = M47;

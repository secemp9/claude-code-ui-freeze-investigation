// Module: w$4
// Dependencies: N4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w$4 = v((ZYw, z$4) => {
  var Y$4 = __$.N4A(),
    ve3 = (A, K) => {
      let q = Y$4(A, null, !0),
        Y = Y$4(K, null, !0),
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
  z$4.exports = ve3;
});

// Register to shared state
__$.w$4 = w$4;

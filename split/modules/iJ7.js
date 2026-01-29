// Module: iJ7
// Dependencies: PqA, pJ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iJ7 = v((ejY, YD6) => {
  var dJ7 = __$.PqA(),
    {
      checkPath: cJ7
    } = __$.pJ7(),
    lJ7 = A => {
      let K = {
        mode: 511
      };
      if (typeof A === "number") return A;
      return {
        ...K,
        ...A
      }.mode;
    };
  ejY.makeDir = async (A, K) => {
    return cJ7(A), dJ7.mkdir(A, {
      mode: lJ7(K),
      recursive: !0
    });
  };
  ejY.makeDirSync = (A, K) => {
    return cJ7(A), dJ7.mkdirSync(A, {
      mode: lJ7(K),
      recursive: !0
    });
  };
});

// Register to shared state
__$.iJ7 = iJ7;
